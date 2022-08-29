from backend.dtos.userDto import UserDto
from dtos.itemDto import ItemDto
from flask_pymongo import PyMongo
from dtos.bagDto import BagDto
from dtos.tripDto import TripDto

# All the addElement take the ownerID, the Dto, collection of the database and
# the instance of the database on flask to make the connection and insert the
# new element

# TODO: Add error handling in case the element already exist in the database


def addNewItem(ownerId, item: ItemDto, collection, mongo: PyMongo):
    newItem = {"_id": f"{ownerId}-{item.itemName}", "ownerId": ownerId}
    newItem.update(item.__dict__)
    mongo.db[collection].insert_one(newItem)


def getItems(ownerId: str, mongo: PyMongo):
    result = mongo.db.items.find({"ownerId": ownerId})
    return result


def addNewBag(ownerId, bag: BagDto, collection, mongo: PyMongo):
    newBag = {"_id": f"{ownerId}-{bag.bagName}", "ownerId": ownerId}
    newBag.update(bag.__dict__)
    mongo.db[collection].insert_one(newBag)


def getBags(ownerId: str, mongo: PyMongo):
    result = mongo.db.bags.find({"ownerId": ownerId})
    return result


def addNewTrip(ownerId, trip: TripDto, collection, mongo: PyMongo):
    newTrip = {"_id": f"{ownerId}-{trip.tripName}", "ownerId": ownerId}
    newTrip.update(trip.__dict__)
    mongo.db[collection].insert_one(newTrip)


def getTrips(ownerId: str, mongo: PyMongo):
    result = mongo.db.trips.find({"ownerId": ownerId})
    return result


def addNewUser(user: UserDto, mongo: PyMongo):
    mongo.db.users.insert_one(user.__dict__)


def getUser(email: str, mongo: PyMongo):
    result = list(mongo.db.users.find({'email': email}))
    if bool(result):
        result = result[0]
    else:
        result = False
    return result
