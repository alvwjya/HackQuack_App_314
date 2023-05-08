from models.client import Client
from flask import Flask, jsonify, request
from flaskConfig import app
from flask_cors import cross_origin, CORS
from database import session_factory

@app.route('/updateCustomer/<int:id>', methods=['PUT'])
def update_customer_profile(id):
    session = session_factory()
    customer = session.query(Client).get(id)
    if not customer:
        return {"status": "error", "message": "User not found"}
    data = request.get_json()
    customer.first_name = data['first_name']
    customer.last_name = data['last_name']
    customer.email = data['email']
    customer.password = data['password']
    customer.suburb = data['suburb']
    customer.state = data['state']
    customer.postcode = data['postcode']
    session.add(customer)
    session.commit()
    session.close()
    return jsonify({'message': 'Profile updated successfully!'})