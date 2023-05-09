from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from flaskConfig import app

#method that requests the data from the requests table

# Unsure of how to do this :/
@app.route("/ProfessionalViewServiceRequests", methods=["POST"])
@cross_origin()
def makeNewRequest():
    body = request.get_json()
    return body

print("Test - Viewing Current Service Requests (Professional)")