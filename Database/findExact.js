var MongoClient=require('mongodb').MongoClient;

var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    var dbObject=db.db('mydb');
    var query={city:"Kolkata"};
    dbObject.collection("employee").find(query).toArray(function(err,result){
        if(err)throw err;
        console.log(result);
        db.close();
    });
});