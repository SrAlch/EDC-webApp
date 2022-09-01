from os.path import join, dirname, abspath
import os
import json
import uuid
from dtos.itemDto import ItemDto
from flask_pymongo import PyMongo
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from dbFunct import addNewItem

DBFILLER_FOLDER = join(dirname(abspath(__file__)), "dbFiller")
MONGO = PyMongo()
BCRYPT = Bcrypt()
JWT = JWTManager()
CORS_INST = CORS()


def createCollection(uuidInput, collName, jsonFile, uuidDependency=None):
    mongodb = MONGO.db
    fieldName = f"{collName[0:-1]}Id"
    check = mongodb[collName].find({fieldName: jsonFile[fieldName]})
    if len(list(check)) <= 0:
        if uuidDependency is not None:
            finalDict = {"_id": uuidInput, "ownerId": uuidDependency}
            finalDict.update(jsonFile)
        else:
            finalDict = {"_id": uuidInput}
            finalDict.update(jsonFile)
        mongodb[collName].insert_one(finalDict)


def getJsonData(fileName):
    with open(join(DBFILLER_FOLDER, fileName), "r") as f:
        return json.loads(f.read())


def createDB():
    fileList = os.listdir(DBFILLER_FOLDER)
    uuidUserString = str(uuid.uuid1())
    for file in fileList:
        collName = file.replace("Fill.json", "")
        jsonData = getJsonData(file)
        if "user" not in file:
            for j in jsonData:
                uuidString = str(uuid.uuid1())
                createCollection(uuidString,
                                 collName,
                                 jsonData[j],
                                 uuidUserString)
        else:
            createCollection(uuidUserString, collName, jsonData)


def testDone():
    newItem = ItemDto("test", 3, "sadasdasd", "sadasdasd")

    addNewItem("asdasd", newItem, "items", MONGO)
