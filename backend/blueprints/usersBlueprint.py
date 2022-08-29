from uuid import uuid1
from flask import Blueprint, request
from bson import json_util
from dtos.userDto import UserDto
from dbFunct import getUser, addNewUser
from dbCreation import MONGO, BCRYPT
from flask_jwt_extended import jwt_required

usersBlueprint = Blueprint('bagsBlueprint', __name__)


@usersBlueprint.route('/register', methods=["POST"])
def createUser():
    userId = str(uuid1())
    BCRYPT.generate_password_hash
    hashedPw = (BCRYPT.generate_password_hash(request.json["password"])
                      .decode('utf-8'))
    newUser = UserDto(userId,
                      request.json["userName"],
                      request.json["email"],
                      hashedPw,
                      request.json["phone"],
                      request.json["homeCountry"],)
    checkUser = getUser(newUser["email"])

    if not checkUser:
        addNewUser
    else:
        return {"msg": "This email is already in use"}


@usersBlueprint.route('/profile', methods=["GET"])
@jwt_required()
def getUserProfile():
    ownerEmail = request.json["email"]
    profileDict = getUser(ownerEmail, MONGO)
    del profileDict["password"]
    return json_util.dumps(profileDict)
