# Import necessary modules and objects
from models import Professional

from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from flaskConfig import app

from sqlalchemy.orm import sessionmaker
from database import Base, engine
from datetime import datetime, timedelta
import re

# Set up a sessionmaker bound to the engine
Session = sessionmaker(bind=engine)
session = Session()

# Define a function to update a professional's profile
def update_professional_profile(professional_id, first_name, last_name, abn, email, business_name, suburb, state, postcode):
    professional = session.query(Professional).get(professional_id)
    if not professional:
        return {"status": "error", "message": "Professional not found"}

    # Validate ABN
    existing_abn_professional = session.query(Professional).filter_by(abn=abn).first()
    if existing_abn_professional and existing_abn_professional.id != professional_id:
        return {"status": "error", "message": "This ABN is already taken. Please choose a different one."}

    # Validate email
    email_regex = r'^[^@]+@[^@]+\.[^@]+$'
    if not re.match(email_regex, email):
        return {"status": "error", "message": "Invalid email address."}
    
    existing_email_professional = session.query(Professional).filter_by(email=email).first()
    if existing_email_professional and existing_email_professional.id != professional_id:
        return {"status": "error", "message": "This email is already taken. Please choose a different one."}

    # Validate business name
    business_name_regex = r'^[A-Za-z0-9\s]+$'
    if not re.match(business_name_regex, business_name):
        return {"status": "error", "message": "Invalid business name. Business names can only contain letters, numbers, and spaces."}

    existing_business_name_professional = session.query(Professional).filter_by(business_name=business_name).first()
    if existing_business_name_professional and existing_business_name_professional.id != professional_id:
        return {"status": "error", "message": "This business name is already taken. Please choose a different one."}

    # Validate location
    valid_states = ['NSW', 'VIC', 'QLD', 'SA', 'WA', 'TAS', 'NT', 'ACT']
    if state.upper() not in valid_states:
        return {"status": "error", "message": "Invalid state. Please choose a valid state."}

    # Add the updated information to the professional's profile
    professional.first_name = first_name
    professional.last_name = last_name
    professional.abn = abn
    professional.email = email
    professional.business_name = business_name
    professional.suburb = suburb
    professional.state = state
    professional.postcode = postcode
    session.commit()

    return {"status": "success", "message": "Profile updated successfully"}

# Define a route to handle update requests
@app.route("/update-professional", methods=["POST"])
@cross_origin()
def updateProfessional():
    body = request.get_json()
    professional_id = body.get('professional_id')
    first_name = body.get('first_name')
    last_name = body.get('last_name')
    abn = body.get('abn')
    email = body.get('email')
    business_name = body.get('business_name')
    suburb = body.get('suburb')
    state = body.get('state')
    postcode = body.get('postcode')

    result = update_professional_profile(professional_id, first_name, last_name, abn, email, business_name, suburb, state, postcode)
    return jsonify(result)

# Define a function to record failed update attempts
def record_failed_update(professional_id):
    professional = session.query(Professional).get(professional_id)
    if not professional:
        return {"status": "error", "message": "Professional not found"}

    now = datetime.utcnow()

    if not hasattr(professional, "failed_update_count"):
        professional.failed_update_count = 0
        professional.failed_update_timestamp = now

    if now - professional.failed_update_timestamp > timedelta(minutes=10):
        professional.failed_update_count = 0

    professional.failed_update_count += 1
    professional.failed_update_timestamp = now

    session.commit()

    if professional.failed_update_count >= 3:
        return {"status": "error", "message": "You have failed to update your profile 3 times. Please try again after 10 minutes."}

    return {"status": "success", "message": "Failed update recorded"}

# Define a route to handle failed update recording requests
@app.route("/record-failed-update", methods=["POST"])
@cross_origin()
def recordFailedUpdate():
    body = request.get_json()
    professional_id = body.get('professional_id')
    result = record_failed_update(professional_id)
    return jsonify(result)
