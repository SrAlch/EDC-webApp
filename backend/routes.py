from flask import render_template
import app as flaskApp

app = flaskApp.webApp()


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/test/')
def test():
    return render_template('test.html')