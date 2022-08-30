from datetime import timedelta
import os
import configparser
from flask import Flask
from dbCreation import MONGO, BCRYPT, JWT, CORS_INST
from blueprints.itemsBlueprint import itemsBlueprint
from blueprints.bagsBlueprint import bagsBlueprint
from blueprints.tripsBlueprint import tripsBlueprint
from blueprints.usersBlueprint import usersBlueprint
from blueprints.tokenBlueprint import tokenBlueprint

# Loading the configuration of the application

BACKEND_FOLDER = (os.path.dirname(os.path.abspath(__file__)))
config = configparser.ConfigParser()
config.read(os.path.join(BACKEND_FOLDER, "webApp.ini"))


# Creates the instance of flask, adds the variables for the applications,
# register the different blueprits and then adds the instances of the other
# required modules as mongoDB or JWT.

app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = config['TEST']['SECRET_KEY']
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=1)
app.config['DEBUG'] = True
app.config['MONGO_URI'] = config['TEST']['DB_URI']
app.register_blueprint(itemsBlueprint)
app.register_blueprint(bagsBlueprint)
app.register_blueprint(tripsBlueprint)
app.register_blueprint(usersBlueprint)
app.register_blueprint(tokenBlueprint)
MONGO.init_app(app)
BCRYPT.init_app(app)
JWT.init_app(app)
CORS_INST.init_app(app)
