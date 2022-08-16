import json
import os


def configRead(fileName):
    # Got from shorturl.at/hrtxy -> StackOverflow
    __location__ = os.path.realpath(
        os.path.join(os.getcwd(), os.path.dirname(__file__)))

    with open(os.path.join(__location__, fileName), "r") as file:
        appConfig = json.load(file)
        return appConfig
