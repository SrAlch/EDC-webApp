import json
from flask import Blueprint, request
from bson import json_util
from dtos.itemDto import ItemDto
import dbFunct
from dbCreation import MONGO

itemsBlueprint = Blueprint('itemsBlueprint', __name__)


@itemsBlueprint.route('/items', methods=["GET"])
def getItems():
    ownerId = "328c141b-20d8-11ed-859d-50e085f3ef4d"
    itemsDict = dbFunct.getItems(ownerId, MONGO)
    return json_util.dumps(itemsDict)


@itemsBlueprint.route('/items', methods=["POST"])
def addNewItem():
    uuidUser = request.json["uuidUser"]
    newItem = ItemDto(request.json["itemName"],
                      request.json["itemAmount"],
                      request.json["notes"],
                      request.json["category"])
    dbFunct.addNewItem(uuidUser, newItem, "items", MONGO)
    return (json.dumps({'success': True}),
            200,
            {'ContentType': 'application/json'})
