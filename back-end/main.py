from flask import Flask, jsonify, request
import os
from dotenv import load_dotenv, find_dotenv
from sqlalchemy import create_engine

load_dotenv(find_dotenv())
print(os.environ.get("DATABASE_URL"))

user=os.environ.get("DATABASE_USER")
password=os.environ.get("DATABASE_PASSWORD")
host=os.environ.get("DATABASE_URL")
database=os.environ.get("DATABASE_SCHEMA")


engine = create_engine("mysql+pymysql://{user}:{password}@{host}/{database})?charset=utf8mb4")





app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/", methods=['GET'])
def hello():
    return jsonify("Hello World!")


if __name__ == '__main__':
    app.run(debug=True)