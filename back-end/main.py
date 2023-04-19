from flask import Flask, jsonify, request
import mysql.connector 



app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/", methods=['GET'])
def hello():
    return jsonify("Hello World!")


if __name__ == '__main__':
    app.run(debug=True)