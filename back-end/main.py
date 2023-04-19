from flask import Flask, jsonify, request
import mysql.connector
import os
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())
print(os.environ.get("DATABASE_URL"))

cnx = mysql.connector.connect(user=os.environ.get("DATABASE_USER"), password=os.environ.get("DATABASE_PASSWORD"),
                              host=os.environ.get("DATABASE_URL"),
                              database=os.environ.get("DATABASE_SCHEMA"))
cnx.close()


app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/", methods=['GET'])
def hello():
    return jsonify("Hello World!")


if __name__ == '__main__':
    app.run(debug=True)