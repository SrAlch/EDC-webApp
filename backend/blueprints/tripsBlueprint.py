import json
from flask import Blueprint, request
from bson import json_util
from dtos.tripDto import TripDto
import dbFunct
from dbCreation import MONGO
from flask_jwt_extended import jwt_required

tripsBlueprint = Blueprint('tripsBlueprint', __name__)


@tripsBlueprint.route('/trips/<ownerId>', methods=["GET"])
@jwt_required()
def getBags(ownerId: str):
    tripsDict = dbFunct.getTrips(ownerId, MONGO)
    return json_util.dumps(tripsDict), 200


@tripsBlueprint.route('/trips', methods=["POST"])
@jwt_required()
def addNewBag():
    ownerId = request.json["ownerId"]
    newTrip = TripDto(request.json["tripName"],
                      request.json["date"],
                      request.json["destination"],
                      request.json["backpacks"],
                      request.json["items"])
    dbFunct.addNewTrip(ownerId, newTrip, "trips", MONGO)
    return (json.dumps({'success': True}),
            200,
            {'ContentType': 'application/json'})


@tripsBlueprint.route('/trips', methods=["DELETE"])
@jwt_required()
def deleteItem():
    tripId = request.json["tripId"]
    result = dbFunct.deleteTrip(tripId, MONGO)
    if result == 1:
        return {"msg": "Record deleted"}, 200
    else:
        return {"msg": "An error has occured"}, 400
