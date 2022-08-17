import os
import configparser
from datetime import datetime
# from pymongo import MongoClient
# from pymongo.errors import ConnectionFailure
from flask import Flask, render_template
from flask_pymongo import PyMongo
from flask_cors import CORS
from flask.json import JSONEncoder
from bson import json_util, ObjectId


"""def getDb():
    client = MongoClient(CONN_STRING, int(PORT))
    try:
        client.admin.command('ping')
    except ConnectionFailure:
        print(f"Couldn't connect with {CONN_STRING}")
    db = client.get_database()
    return db


class MongoJsonEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj, datetime):
            return obj.strftime("%Y-%m-%d %H:%M:%S")
        if isinstance(obj, ObjectId):
            return str(obj)
        return json_util.default(obj, json_util.CANONICAL_JSON_OPTIONS)


def webApp():
    app = Flask(__name__)
    CORS(app)
    app.json_provider_class = MongoJsonEncoder
    return app


config = configparser.ConfigParser()
localFolder = (os.path.dirname(os.path.abspath(__file__)))
config.read(os.path.join(localFolder, "webApp.ini"))

if __name__ == "__main__":
    app = webApp()
    app.config['DEBUG'] = True
    app.config['MONGO_URI'] = config['TEST']['DB_URI']
    g.db.testColl.insert_one({'test': "sadasdasdasd", 'Body': "asdasdasd"})
    app.run()
"""

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
#    mongo = PyMongo(app)


"""@app.route("/")
def home_page():
    online_users = mongo.db.users.insert_one({'test': "1", 'Body': "asdasdasd"})
    return render_template("index.html",
                           online_users=online_users)"""

# mongo.db.users.insert_one({'test': "1", 'Body': "asdasdasd"})
# print(json_util.dumps(list(mongo.db.users.find({'test': "1"}))))

# if __name__ == "__main__":
#     app.run()
