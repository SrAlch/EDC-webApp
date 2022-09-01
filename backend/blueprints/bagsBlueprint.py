import json
from flask import Blueprint, request
from bson import json_util
from dtos.bagDto import BagDto
import dbFunct
from dbCreation import MONGO
from flask_jwt_extended import jwt_required

bagsBlueprint = Blueprint('bagsBlueprint', __name__)


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


@bagsBlueprint.route('/bags/<ownerId>', methods=["GET"])
@jwt_required()
def getBags(ownerId: str):
    bagsDict = dbFunct.getBags(ownerId, MONGO)
    return json_util.dumps(bagsDict)


@bagsBlueprint.route('/bags', methods=["DELETE"])
@jwt_required()
def deleteBag():
    bagId = request.json["bagId"]
    result = dbFunct.deleteBag(bagId, MONGO)
    if result == 1:
        return {"msg": "Record deleted"}, 200
    else:
        return {"msg": "An error has occured"}, 400
