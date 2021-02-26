from pymongo import MongoClient
from flask import Flask, render_template, jsonify, request

client = MongoClient('localhost', 27017)
db = client.dbhh99

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/movies', methods=['GET'])
def get_movie():
    movies = list(db.moviememo.find({}, {'_id': False}))
    return jsonify({'result': 'success', 'movies': movies})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
