var http=require('http');

var MongoClient=require('mongodb').MongoClient;

var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbObject=db.db('mydb');
    dbObject.collection("employee").find({}).toArray(function(err,result){
           if(err) throw err;
           console.log(result);
           db.close();
        });
});