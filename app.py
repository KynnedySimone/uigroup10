from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/tripDetails')
def tripDetails():
    return render_template('tripDetails.html')

@app.route('/profilePage')
def profilePage():
    return render_template('profilePage.html')

@app.route('/viewItinerary')
def viewItinerary():
    return render_template('viewItinerary.html')

@app.route('/viewItinerary2')
def viewItinerary2():
    return render_template('viewItinerary2.html')

@app.route('/voteActivities')
def voteActivities():
    return render_template('voteActivities.html')

@app.route('/tripBudget')
def tripBudget():
    return render_template('tripBudget.html')

@app.route('/chooseActivities.html')
def chooseActivities():
    return render_template('chooseActivities.html')

@app.route('/addMember.html')
def addMember():
    return render_template('addMember.html')

if __name__ == '__main__':
    app.run(debug=True)