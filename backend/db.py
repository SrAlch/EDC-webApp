import bson
from werkzeug.local import LocalProxy
from flask import current_app, g
from flask_pymongo import PyMongo
from Dtos.itemDto import ItemDto
import flask


def getDb():
    """
    Configuration method to return db instance, code obtained from
     shorturl.at/acvHP"""
    db = getattr(g, "_database", None)

    if db is None:
        db = g._database = PyMongo(current_app).db
    print(db.list_collections())
    return db


db = LocalProxy(getDb())


@current_app.route("/addItem")
def addItem(item: ItemDto):
    try:
        db.testColl.insert_one({'test': "sadasdasdasd", 'Body': "asdasdasd"})
        result = flask.jsonify(message="success")
    except Exception as e:
        result = e
    return result
