from models.client import Client
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from flaskConfig import app

@app.route("/signup-professional", methods=["POST"])
@cross_origin()
def signupProfessional():
    body = request.get_json()
    return body

print("HELLO THERE PEEPS")

