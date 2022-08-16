import tools

appConfig = tools.configRead("appConfig.json")

HOST = appConfig["MongoDBSettings"]["Host"]
PORT = appConfig["MongoDBSettings"]["Port"]
CONN_STRING = f"mongodb://{HOST}:{PORT}"
