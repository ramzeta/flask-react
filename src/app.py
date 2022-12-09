from flask import Flask, request, jsonify
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS


app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost/pythonreactdb'
mongo = PyMongo(app)

db = mongo.db.users

@app.route('/user',methods=['POST'])
def createUsers():
    id = db.insert_one({
        'username':request.json['username'],
        'email':request.json['email'],
        'password':request.json['password']
    })
    return jsonify(str(ObjectId(id)))

@app.route('/users',methods=['GET'])
def getUsers():
    users = []
    for doc in db.find():
        users.append({
            '_id':str(ObjectId(doc['_id'])),
            'username':doc['username'],
            'email':doc['email']
        })
    return jsonify(users)

@app.route('/user/<id>',methods=['GET'])
def getUser(id):
    user = db.find_one({'_id' :ObjectId(id)})
    return jsonify({
        '_id': str(ObjectId(user['_id'])),
        'username': user['username'],
        'email': user['email'],
        'password':user['password']
    })

@app.route('/user/deleteUser/<id>',methods=['DELETE'])
def deleteUser(id):
    db.delete_one({'_id': ObjectId(id)})
    return jsonify({'msg':'user deleted'})

# @app.route('/users/<id>',methods=['PUT'])
# def updateUser():
#     return'<h1>updateUser</>'

# @app.route('/users/<id>',methods=['PUT'])
# def updateUser():
#     return'<h1>updateUser</>'


if __name__ == "__main__":
    app.run(debug=True)