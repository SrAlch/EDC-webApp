import app

appInst = app.webApp()


@appInst.route("/")
def home():
    return "hello world"
