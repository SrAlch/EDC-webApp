import json
from flask import Blueprint, request
from bson import json_util
from dtos.tripDto import TripDto
import dbFunct
from dbCreation import MONGO

tripsBlueprint = Blueprint('tripsBlueprint', __name__)


@tripsBlueprint.route('/trips', methods=["GET"])
def getBags():
    ownerId = "328c141b-20d8-11ed-859d-50e085f3ef4d"
    tripsDict = dbFunct.getBags(ownerId, MONGO)
    return json_util.dumps(tripsDict)


@tripsBlueprint.route('/trips', methods=["POST"])
def addNewBag():
    uuidUser = request.json["uuidUser"]
    newTrip = TripDto(request.json["tripName"],
                      request.json["date"],
                      request.json["destination"],
                      request.json["backpacks"],
                      request.json["items"])
    dbFunct.addNewTrip(uuidUser, newTrip, "bags", MONGO)
    return (json.dumps({'success': True}),
            200,
            {'ContentType': 'application/json'})
