import os
import configparser
from flask import Flask
from flask_cors import CORS
from dbCreation import MONGO
from blueprints.itemsBlueprint import itemsBlueprint
from blueprints.bagsBlueprint import bagsBlueprint
from blueprints.tripsBlueprint import tripsBlueprint


BACKEND_FOLDER = (os.path.dirname(os.path.abspath(__file__)))
config = configparser.ConfigParser()
config.read(os.path.join(BACKEND_FOLDER, "webApp.ini"))


app = Flask(__name__)
app.config['DEBUG'] = True
app.config['MONGO_URI'] = config['TEST']['DB_URI']
app.register_blueprint(itemsBlueprint)
app.register_blueprint(bagsBlueprint)
app.register_blueprint(tripsBlueprint)
MONGO.init_app(app)
CORS().init_app(app)
