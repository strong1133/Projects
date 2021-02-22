from pymongo import MongoClient
from flask import Flask, render_template, jsonify, request

app = Flask(__name__)
client = MongoClient('localhost', 27017)
db = client.dbhh99


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/review', methods=['GET'])
def get_review():
    reviews = list(db.bookreivew.find({}, {'_id': False}))
    return jsonify({'result': 'success', 'reviews': reviews})


@app.route('/review', methods=['POST'])
def create_review():
    title_receive = request.form['title_give']
    author_receive = request.form['author_give']
    review_receive = request.form['review_give']
    doc = {
        'title': title_receive,
        'author': author_receive,
        'review': review_receive
    }
    print(doc)
    db.bookreivew.insert_one(doc);
    return jsonify({'result': 'success'})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
