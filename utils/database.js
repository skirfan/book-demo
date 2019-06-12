const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    // "mongodb+srv://demonarola:2UJ6u14ieZZiGxwa@cluster0-z1nzt.mongodb.net/shop?retryWrites=true"
    "mongodb://localhost:27017/shop"
  )
    .then(client => {
      console.log("Connected");
      _db = client.db();
      callback();
    })
    .catch(error => {
      console.log(error);
      throw error;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
};

// module.exports = mongoConnect;
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
