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


@app.route('/like', methods=['POST'])
def set_like():
    name_receive = request.form['name_give']
    target_star = db.stars.find_one({'name': name_receive})
    current_like = target_star['like']
    new_like = current_like + 1
    db.stars.update_one({'name': name_receive}, {'$set': {'like': new_like}})

    return jsonify({'result': 'success', 'msg': '좋아요!'})


@app.route('/hate', methods=['POST'])
def set_hate():
    name_receive2 = request.form['hate_give']
    target_star = db.stars.find_one({'name': name_receive2})
    current_like = target_star['like']
    new_like = current_like -1
    db.stars.update_one({'name': name_receive2}, {'$set': {'like': new_like}})

    return jsonify({'result': 'success', 'msg': '싫어요!'})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
