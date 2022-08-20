from dbCreation import MONGO


def findUser(user="user1"):
    result = MONGO.db.users.find({'userId': user})
    return result