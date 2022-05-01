var http=require('http');

var MongoClient=require('mongodb').MongoClient;

var url="mongodb://localhost:27017/";

MongoClient.connect(url, function(err,db) {
    if(err)throw err;

var remove_data ={SClass:"5"};
var dbo = db.db("StudentDB");

//Remove method
dbo.collection("student").remove(remove_data, function(err, result){
    if(err) throw err;
    console.log("The record has been removed")
    console.log(result );
    db.close();
});
});