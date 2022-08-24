import json
from flask import Blueprint, request
from bson import json_util
from dtos.bagDto import BagDto
import dbFunct
from dbCreation import MONGO

bagsBlueprint = Blueprint('bagsBlueprint', __name__)


@bagsBlueprint.route('/bags', methods=["GET"])
def getBags():
    ownerId = "328c141b-20d8-11ed-859d-50e085f3ef4d"
    bagsDict = dbFunct.getBags(ownerId, MONGO)
    return json_util.dumps(bagsDict)


@bagsBlueprint.route('/bags', methods=["POST"])
def addNewBag():
    uuidUser = request.json["uuidUser"]
    newItem = BagDto(request.json["bagName"],
                     request.json["capacity"],
                     request.json["style"],
                     request.json["notes"])
    dbFunct.addNewBag(uuidUser, newItem, "bags", MONGO)
    return (json.dumps({'success': True}),
            200,
            {'ContentType': 'application/json'})


@bagsBlueprint.route('/bags', methods=["PUT"])
def updateBag():
    uuidUser = request.json["uuidUser"]
    newItem = BagDto(request.json["bagName"],
                     request.json["capacity"],
                     request.json["style"],
                     request.json["notes"])
    dbFunct.addNewItem(uuidUser, newItem, "bags", MONGO)
    return (json.dumps({'success': True}),
            200,
            {'ContentType': 'application/json'})
