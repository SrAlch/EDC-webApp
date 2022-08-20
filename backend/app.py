import os
import configparser
from flask import Flask
from flask_cors import CORS
from funcDB import MONGO


BACKEND_FOLDER = (os.path.dirname(os.path.abspath(__file__)))
config = configparser.ConfigParser()
config.read(os.path.join(BACKEND_FOLDER, "webApp.ini"))


def webApp():
    app = Flask(__name__)
    app.config['DEBUG'] = True
    app.config['MONGO_URI'] = config['TEST']['DB_URI']
    MONGO.init_app(app)
    CORS().init_app(app)
    return app
