from datetime import datetime, timedelta
from json import dumps
import pytz
from flask_jwt_extended import (create_access_token, unset_access_cookies,
                                get_jwt, get_jwt_identity)
from flask import Blueprint, request, jsonify, Response
from dbFunct import getUser
from dbCreation import MONGO, BCRYPT


tokenBlueprint = Blueprint('tokenBlueprint', __name__)


@tokenBlueprint.after_request
def refreshToken(response: Response):
    """Function attemps to now how much time is left before the token expire
    to try to renew it. Gets executed with every new request to the server,
    checking the token of the user"""

    try:
        expirationTime = get_jwt()["exp"]
        currentTime = datetime.now(pytz.utc)
        targetStamp = datetime.timestamp(currentTime + timedelta(minutes=25))

        if targetStamp > expirationTime:
            token = create_access_token(identity=get_jwt_identity())
            jsonResponse: dict = response.get_json()
            jsonResponse["access_token"] = token
            response.data = dumps(jsonResponse)
        return response
    except (RuntimeError, KeyError):
        return response


@tokenBlueprint.route('/token', methods=["POST"])
def create_token():
    """Requests the email and password, checks the user exists, then checks
    that the provided password matchs the hashed password on the database.
    If everything is correct will generate a token with the users email"""

    email = request.json.get("email", None)
    password = request.json.get("password", None)
    failReturn = "Wrong user or password. Did you input the correct data?"

    user = getUser(email, MONGO)

    if not user:
        return {"msg": failReturn}, 401
    hashCheck = BCRYPT.check_password_hash(user["password"], password)

    if not hashCheck:
        return {"msg": failReturn}, 401

    token = {"access_token": create_access_token(identity=email)}
    return token


@tokenBlueprint.route('/logout', methods=["POST"])
def logout():
    """Clears the cached JWT token to remove access"""
    response = {"msg": "Successfully logged out"}
    unset_access_cookies(jsonify(response))
    return response
