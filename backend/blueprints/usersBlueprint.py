import re
from uuid import uuid1
from flask import Blueprint, request, jsonify
from dtos.userDto import UserDto
from dbFunct import getUser, addNewUser, deleteUser
from dbCreation import MONGO, BCRYPT
from flask_jwt_extended import jwt_required


usersBlueprint = Blueprint('usersBlueprint', __name__)


@usersBlueprint.route('/register', methods=["POST"])
def createUser():
    """Requests the information on the registration form to then check if the
    inputed email already exist or not, then creates the Dto object and send
    it to the database"""
    newUserName = request.json["userName"]
    newEmail = request.json["email"]
    newPassword = request.json["password"]
    newPhone = request.json["phone"]
    newHomeCountry = request.json["homeCountry"]
    regExPattern = (r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.'
                    r'[A-Z|a-z]{2,})+')
    if re.fullmatch(regExPattern, newEmail) is None:
        return {"msg": f"The email address {newEmail} is not a valid one"}, 400
    if len(newUserName) < 6:
        return ({"msg": "The Username have to be at least 6 characters long"},
                400)
    if len(newPassword) < 6:
        return ({"msg": "The Password have to be at least 6 characters long"},
                400)
    checkUser = getUser(newEmail, MONGO)
    if not checkUser:
        userId = str(uuid1())
        hashedPw = (BCRYPT.generate_password_hash(newPassword)
                          .decode('utf-8'))
        newUser = UserDto(userId,
                          newUserName,
                          newEmail,
                          hashedPw,
                          newPhone,
                          newHomeCountry)
        addNewUser(newUser, MONGO)
        return {"msg": "The account is being created"}, 200

    else:
        return {"msg": "This email is already in use"}, 400


@usersBlueprint.route('/profile/<string:email>', methods=["GET"])
@jwt_required()
def getUserProfile(email: str):
    """Requests the current user email and returns all the relevant details of
    the user."""

    profileDict = getUser(email, MONGO)
    del profileDict["password"]
    return jsonify(profileDict)


@usersBlueprint.route('/profile/<string:ownerId>', methods=["DELETE"])
@jwt_required()
def deleteUserProfile(ownerId: str):
    """"""
    result = deleteUser(ownerId, MONGO)
    return jsonify(result)
