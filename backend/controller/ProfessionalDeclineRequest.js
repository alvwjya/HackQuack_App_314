from models.professional import Professional

from flask import Flask, jsonify, request
from flaskConfig import app
from flask_cors import cross_origin, CORS

from database import session_factory

@app.route('/professionalDeclineRequest/<int:id>', methods=['PUT'])
def professional_decline_request(id):
    session = session_factory()
    professionalServiceRequest = session.query(professionalServiceRequest).get(id)
    professionalServiceRequest.acceptance = 0
    return jsonify({'message': 'Professional decline request successfully!'})