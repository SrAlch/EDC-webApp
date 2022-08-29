from dtos.itemDto import ItemDto
from flask_pymongo import PyMongo
from dtos.bagDto import BagDto
from dtos.tripDto import TripDto


def addNewItem(uuidUser, item: ItemDto, collection, mongo: PyMongo):
    newItem = {"_id": f"{uuidUser}-{item.itemName}", "ownerId": uuidUser}
    newItem.update(item.__dict__)
    mongo.db[collection].insert_one(newItem)


def getItems(uuidUser: str, mongo: PyMongo):
    result = mongo.db.items.find({"ownerId": uuidUser})
    return result


def addNewBag(uuidUser, bag: BagDto, collection, mongo: PyMongo):
    newBag = {"_id": f"{uuidUser}-{bag.bagName}", "ownerId": uuidUser}
    newBag.update(bag.__dict__)
    mongo.db[collection].insert_one(newBag)


def getBags(uuidUser: str, mongo: PyMongo):
    result = mongo.db.bags.find({"ownerId": uuidUser})
    return result


def addNewTrip(uuidUser, trip: TripDto, collection, mongo: PyMongo):
    newTrip = {"_id": f"{uuidUser}-{trip.tripName}", "ownerId": uuidUser}
    newTrip.update(trip.__dict__)
    mongo.db[collection].insert_one(newTrip)


def getTrips(uuidUser: str, mongo: PyMongo):
    result = mongo.db.trips.find({"ownerId": uuidUser})
    return result


def findUser(email: str, mongo: PyMongo):
    result = list(mongo.db.users.find({'email': email}))
    if bool(result):
        result = result[0]
    else:
        result = False
    return result
