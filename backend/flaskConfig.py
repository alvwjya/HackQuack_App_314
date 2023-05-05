from flask import Flask


app = Flask(__name__)
app.config["CORS_HEADERS"] = 'Content-Type'

