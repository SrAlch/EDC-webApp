from dtos.userDto import UserDto
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
    result = mongo.db[collection].insert_one(newItem)
    return result.acknowledged


def getItems(ownerId: str, mongo: PyMongo):
    result = mongo.db.items.find({"ownerId": ownerId})
    return result


def deleteItem(itemId: str, mongo: PyMongo):
    result = mongo.db.items.delete_one({"_id": itemId})
    return result.deleted_count


def addNewBag(ownerId, bag: BagDto, collection, mongo: PyMongo):
    newBag = {"_id": f"{ownerId}-{bag.bagName}", "ownerId": ownerId}
    newBag.update(bag.__dict__)
    result = mongo.db[collection].insert_one(newBag)
    return result.acknowledged


def getBags(ownerId: str, mongo: PyMongo):
    result = mongo.db.bags.find({"ownerId": ownerId})
    return result


def deleteBag(bagId: str, mongo: PyMongo):
    result = mongo.db.bags.delete_one({"_id": bagId})
    return result.deleted_count


def addNewTrip(ownerId, trip: TripDto, collection, mongo: PyMongo):
    newTrip = {"_id": f"{ownerId}-{trip.tripName}", "ownerId": ownerId}
    newTrip.update(trip.__dict__)
    result = mongo.db[collection].insert_one(newTrip)
    return result.acknowledged


def getTrips(ownerId: str, mongo: PyMongo):
    result = mongo.db.trips.find({"ownerId": ownerId})
    return result


def deleteTrip(tripId: str, mongo: PyMongo):
    result = mongo.db.trips.delete_one({"_id": tripId})
    return result.deleted_count


def addNewUser(user: UserDto, mongo: PyMongo):
    result = mongo.db.users.insert_one(user.__dict__)
    return result.acknowledged


def getUser(email: str, mongo: PyMongo):
    result = list(mongo.db.users.find({'email': email}))
    if bool(result):
        result = result[0]
    else:
        result = False
    return result


def deleteUser(ownerId: str, mongo: PyMongo):
    result = mongo.db.users.delete_one({'_id': ownerId})
    return result.deleted_count
