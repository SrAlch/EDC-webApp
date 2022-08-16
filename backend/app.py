import os
import pymongo
from pymongo import MongoClient
from flask import Flask
from .mongoDbSettings import CONN_STRING


def getDb():
    client = MongoClient(CONN_STRING)


def webApp():
    app = Flask(__name__)

    

    return app


client = 


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    webApp().run(debug=True, host='0.0.0.0', port=port)
