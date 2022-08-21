from dtos.itemDto import ItemDto
from flask_pymongo import PyMongo
from dtos.bagDto import BagDto
from dtos.tripDto import TripDto


def addNewItem(uuidUser, item: ItemDto, collection, mongo: PyMongo):
    newItem = {"_id": f"{uuidUser}-{item.itemName}", "ownerId": uuidUser}
    newItem.update(item.__dict__)
    mongo.db[collection].insert_one(newItem)


def addNewBag(uuidUser, bag: BagDto, collection, mongo: PyMongo):
    newBag = {"_id": f"{uuidUser}-{bag.bagName}", "ownerId": uuidUser}
    newBag.update(bag.__dict__)
    mongo.db[collection].insert_one(newBag)


def addNewTrip(uuidUser, item: TripDto, collection, mongo: PyMongo):
    newItem = {"_id": f"{uuidUser}-{item.itemName}", "ownerId": uuidUser}
    newItem.update(item.__dict__)
    mongo.db[collection].insert_one(newItem)


def findUser(user="user1"):
    # result = MONGO.db.users.find({'userId': user})
    result = ""
    return result
