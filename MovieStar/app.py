from flask import Flask, render_template, jsonify, request
from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client.dbhh99

app = Flask('__name__')


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/moviestar', methods=['GET'])
def get_stars():
    stars = list(db.stars.find({}, {'_id': False}).sort('like', -1))
    return jsonify({'result': 'success', 'stars': stars})


@app.route('/moviestar', methods=['POST'])
def set_stars():
    return jsonify({'result': 'success'})

    if __name__ == '__main__':
        app.run('0.0.0.0', port=5000, debug=True)
