import os
import configparser
from flask import Flask
from flask_pymongo import PyMongo
from flask_cors import CORS


config = configparser.ConfigParser()
localFolder = (os.path.dirname(os.path.abspath(__file__)))
config.read(os.path.join(localFolder, "webApp.ini"))


def webApp():
    app = Flask(__name__)
    app.config['DEBUG'] = True
    app.config['MONGO_URI'] = config['TEST']['DB_URI']
    PyMongo().init_app(app)
    CORS().init_app(app)
    return app
