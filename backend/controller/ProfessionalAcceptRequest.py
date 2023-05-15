from models.professional import Professional

from flask import Flask, jsonify, request
from flaskConfig import app
from flask_cors import cross_origin, CORS

from database import session_factory

@app.route('/professionalAcceptRequest/<int:id>', methods=['PUT'])
def professional_accept_request(id):
    session = session_factory()
    data = request.get_json()
    professionalServiceRequest = session.query(professionalServiceRequest).get(id)
    
    return jsonify({'message': 'Professional accept request successfully!'})