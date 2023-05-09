from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from flaskConfig import app

@app.route("/customer-new-request", methods=["POST"])
@cross_origin()
def makeNewRequest():
    body = request.get_json()
    return body


print("HE")