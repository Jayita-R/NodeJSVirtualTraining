var MongoClient=require('mongodb').MongoClient;

var url=require('url');

var url="mongodb://localhost:27017/mydb";

MongoClient.connect(url,function(error,db){
    if(error) throw error;
    var dbobject=db.db('mydb');
    dbobject.createCollection("employee",function(err,response){
        if(err) throw err;
        console.log("Collection Created!");
        db.close();

    });
});
    //console.log("Connection established successfully");
   // console.log("Database created!");
  //  db.close();