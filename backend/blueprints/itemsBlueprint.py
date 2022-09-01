import json
from flask import Blueprint, request
from bson import json_util
from dtos.itemDto import ItemDto
import dbFunct
from dbCreation import MONGO
from flask_jwt_extended import jwt_required

itemsBlueprint = Blueprint('itemsBlueprint', __name__)


@itemsBlueprint.route('/items/<ownerId>', methods=["GET"])
@jwt_required()
def getItems(ownerId: str):
    itemsDict = dbFunct.getItems(ownerId, MONGO)
    return json_util.dumps(itemsDict)


@itemsBlueprint.route('/items', methods=["POST"])
@jwt_required()
def addNewItem():
    uuidUser = request.json["ownerId"]
    newItem = ItemDto(request.json["itemName"],
                      request.json["itemAmount"],
                      request.json["notes"],
                      request.json["category"])
    dbFunct.addNewItem(uuidUser, newItem, "items", MONGO)
    return (json.dumps({'success': True}),
            200,
            {'ContentType': 'application/json'})


@itemsBlueprint.route('/items', methods=["DELETE"])
@jwt_required()
def deleteItem():
    itemId = request.json["itemId"]
    result = dbFunct.deleteItem(itemId, MONGO)
    if result == 1:
        return {"msg": "Record deleted"}, 200
    else:
        return {"msg": "An error has occured"}, 400
