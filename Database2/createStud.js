var MongoClient = require('mongodb').MongoClient;
var url=require('url');
var url = "mongodb://localhost:27017/StudentDB";

MongoClient.connect(url, function(err,db) {
        if(err) throw err;

    var dbo = db.db("StudentDB");
    dbo.createCollection("student",function(err,res){
        if(err)throw err;
        console.log("New Collection Created!");
        db.close();

    });
});