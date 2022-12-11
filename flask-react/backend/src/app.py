import json
from flask import Flask, request, jsonify
from datetime import datetime, timedelta, timezone
from flask_pymongo import PyMongo, ObjectId
from flask_cors import CORS
from flask_jwt_extended import create_access_token,get_jwt,get_jwt_identity, \
                               unset_jwt_cookies, jwt_required, JWTManager

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost/pythonreactdb'
app.config["JWT_SECRET_KEY"] = "12345"
jwt = JWTManager(app)

mongo = PyMongo(app)

# Settings
CORS(app)

# Database
db = mongo.db.users


@app.route('/token', methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return {"msg": "Wrong email or password"}, 401

    access_token = create_access_token(identity=email)
    response = {"access_token":access_token}
    return response


@app.route('/users',methods=['POST'])
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


@app.route('/users/<id>',methods=['GET'])
def getUser(id):
    user = db.find_one({'_id' :ObjectId(id)})
    return jsonify({
        '_id': str(ObjectId(user['_id'])),
        'username': user['username'],
        'email': user['email'],
        'password':user['password']
    })


@app.route('/users/deleteUser/<id>',methods=['DELETE'])
def deleteUser(id):
    db.delete_one({'_id': ObjectId(id)})
    return jsonify({'msg':'user deleted'})


@app.route('/users/updateUser/<id>',methods=['PUT'])
def updateUser(id):
    print(request.json)
    db.update_one({'_id': ObjectId(id)}, {"$set": {
        'username': request.json['username'],
        'email': request.json['email'],
        'password': request.json['password']
    }})
    return jsonify({'message': 'User Updated'})


if __name__ == "__main__":
    app.run(debug=True)