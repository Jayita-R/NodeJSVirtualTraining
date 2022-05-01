var MongoClient=require('mongodb').MongoClient;

var url=require('url');

var url="mongodb://localhost:27017/mydb2";

MongoClient.connect(url,function(error,db){
    if(error) throw error;
    var dbobject=db.db('mydb2');
    dbobject.createCollection("Bank",function(err,response){
        if(err) throw err;
        console.log("Collection Created!");
        db.close();

    });
});