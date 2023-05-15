from models.professional import Professional

from flask import Flask, jsonify, request
from flaskConfig import app
from flask_cors import cross_origin, CORS

from database import session_factory

@app.route('/professionalAcceptRequest/<int:id>', methods=['PUT'])
def professional_accept_request(id):
    session = session_factory()
    professionalServiceRequest = session.query(professionalServiceRequest).get(id)
    if not professionalServiceRequest:
        return {"status": "error", "message": "Professional service request not found"}
    data = request.get_json()
    professionalServiceRequest.cost = data['cost']
    return jsonify({'message': 'Professional accept request successfully!'})