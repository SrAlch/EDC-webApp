import app
from flask import jsonify

appInst = app.webApp()


@appInst.route("/")
def home():
    return "hello world"


@appInst.route("/test", methods=["GET"])
def test():
    testDict = {'name': "Pepe",
                'address': "56 Flopington Avenue"}
    return jsonify(testDict)


appInst.run()
