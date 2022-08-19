from flask_pymongo import PyMongo


mongo = PyMongo()


def createDB():
    mongoColl = mongo.db.users
    check = mongoColl.find({'userId': "user1"})

    if len(list(check)) > 0:
        print("Already exist")
    else:
        print("Creating db ...")
        mongoColl.insert_one({'userId': "user1",
                              'userName': "Daniel",
                              'userTrips': [{'tripId': "trip1",
                                             'destination': "Madrid"}],
                              'userBags': [{'bagId': "bag1",
                                            'bagSize': 35}],
                              'userItems': [{'itemId': "item1",
                                             'itemName': "bottle"}]})


def findUser(user="user1"):
    result = mongo.db.users.find({'userId': user})
    return result
