import json
from flask import Blueprint, request
from bson import json_util
from dtos.bagDto import BagDto
import dbFunct
from dbCreation import MONGO
from flask_jwt_extended import jwt_required

bagsBlueprint = Blueprint('bagsBlueprint', __name__)


@bagsBlueprint.route('/bags/<ownerId>', methods=["GET"])
@jwt_required()
def getBags(ownerId: str):
    bagsDict = dbFunct.getBags(ownerId, MONGO)
    return json_util.dumps(bagsDict)


@bagsBlueprint.route('/bags', methods=["POST"])
@jwt_required()
def addNewBag():
    uuidUser = request.json["ownerId"]
    newItem = BagDto(request.json["bagName"],
                     request.json["capacity"],
                     request.json["style"],
                     request.json["notes"])
    dbFunct.addNewBag(uuidUser, newItem, "bags", MONGO)
    return (json.dumps({'success': True}),
            200,
            {'ContentType': 'application/json'})


@bagsBlueprint.route('/bags', methods=["PUT"])
@jwt_required()
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
