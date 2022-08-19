from bson import json_util
import app
from flask import jsonify
import funcDB

appInst = app.webApp()
# mongo = PyMongo.init_app(app=appInst).db.users

funcDB.createDB()


@appInst.route("/")
def home():
    return "hello world"


@appInst.route("/trips", methods=["GET"])
def getTrips():
    tripDict = funcDB.findUser()
    return json_util.dumps(tripDict)


@appInst.route("/trips", methods=["POST"])
def addTrips():
    tripDict = funcDB.findUser()
    return json_util.dumps(tripDict)


@appInst.route("/test", methods=["GET"])
def test():
    testDict = {'name': "Pepe",
                'address': "56 Flopington Avenue"}
    return jsonify(testDict)


appInst.run()
