from datetime import timedelta
import os
import configparser
from flask import Flask
from flask_cors import CORS
from dbCreation import MONGO, BCRYPT, JWT
from blueprints.itemsBlueprint import itemsBlueprint
from blueprints.bagsBlueprint import bagsBlueprint
from blueprints.tripsBlueprint import tripsBlueprint
from blueprints.tokenBlueprint import tokenBlueprint


BACKEND_FOLDER = (os.path.dirname(os.path.abspath(__file__)))
config = configparser.ConfigParser()
config.read(os.path.join(BACKEND_FOLDER, "webApp.ini"))


app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = config['TEST']['SECRET_KEY']
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
app.config['DEBUG'] = True
app.config['MONGO_URI'] = config['TEST']['DB_URI']
app.register_blueprint(itemsBlueprint)
app.register_blueprint(bagsBlueprint)
app.register_blueprint(tripsBlueprint)
app.register_blueprint(tokenBlueprint)
MONGO.init_app(app)
BCRYPT.init_app(app)
JWT.init_app(app)
CORS().init_app(app)
