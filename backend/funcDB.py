from os.path import join, dirname, abspath
import json
import uuid
import bson
from flask_pymongo import PyMongo

BACKEND_FOLDER = (dirname(abspath(__file__)))

mongo = PyMongo()

jsonDB = {"_id": bson.Binary.from_uuid(uuid.uuid1())}
with open(join(BACKEND_FOLDER, "dbFill.json"), "r") as f:
    jsonDB.update(json.loads(f.read()))


def createDB():
    mongoColl = mongo.db.users
    check = mongoColl.find({'userId': "user1"})

    if len(list(check)) > 0:
        print("Already exist")
    else:
        print("Creating db ...")
        mongoColl.insert_one(jsonDB)


def findUser(user="user1"):
    result = mongo.db.users.find({'userId': user})
    return result
