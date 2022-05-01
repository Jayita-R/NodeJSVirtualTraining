var MongoClient=require('mongodb').MongoClient;

var url=require('url');

var url="mongodb://localhost:27017/mydatabase";

MongoClient.connect(url,function(error,db){
    if(error) throw error;
    var dbobject=db.db('mydatabase');
    dbobject.createCollection("orders",function(err,response){
        if(err) throw err;
        console.log("Collection Created!");
        db.close();

    });
});