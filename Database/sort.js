var MongoClient=require('mongodb').MongoClient;

var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbObject=db.db('mydb');
    var orange = { city : -1};
    dbObject.collection("employee").find().sort(orange).toArray(function(err,data){
        if(err) throw err;
        console.log(data);
        db.close();
    });

});
    