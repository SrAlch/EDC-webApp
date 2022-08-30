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
    """Requests the information on the registration form to then check if the
    inputed email already exist or not, then creates the Dto object and send
    it to the database"""
    newUserEmail = request.json["email"]
    checkUser = getUser(newUserEmail, MONGO)
    if not checkUser:
        userId = str(uuid1())
        hashedPw = (BCRYPT.generate_password_hash(request.json["password"])
                          .decode('utf-8'))
        newUser = UserDto(userId,
                          request.json["userName"],
                          request.json["email"],
                          hashedPw,
                          request.json["phone"],
                          request.json["homeCountry"],)
        addNewUser(newUser)

    else:
        return {"msg": "This email is already in use"}


@usersBlueprint.route('/profile', methods=["GET"])
@jwt_required()
def getUserProfile():
    """Requests the current user email and returns all the relevant details of
    the user"""
    ownerEmail = request.json["email"]
    profileDict = getUser(ownerEmail, MONGO)
    del profileDict["password"]
    return json_util.dumps(profileDict)
