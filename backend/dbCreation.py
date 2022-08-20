from os.path import join, dirname, abspath
import os
import json
import uuid
from flask_pymongo import PyMongo

DBFILLER_FOLDER = join(dirname(abspath(__file__)), "dbFiller")
MONGO = PyMongo()


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
