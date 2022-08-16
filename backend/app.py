import os
import pymongo
from pymongo import MongoClient
from flask import Flask
from mongoDbSettings import CONN_STRING


def getDb():
    client = MongoClient(CONN_STRING)
    db = client.flask_db
    return db


def webApp():
    app = Flask(__name__)
    db = getDb()
    print(db)
    return app


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    webApp().run(debug=True, host='0.0.0.0', port=port)
