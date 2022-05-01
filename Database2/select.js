var http=require('http');

var MongoClient=require('mongodb').MongoClient;

var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbObject=db.db('mydb2');
    var old_data={BName:"Axis"};
    var new_data={$set:{BName:"PNB"}};
    dbObject.collection("Bank").updateMany(old_data,new_data,function(err,result){
        if(err) throw err;
        console.log("New data has been updated successfully!");
    });
    dbObject.collection("Bank").find({}).toArray(function(err,result){
           if(err) throw err;
           console.log(result);
           db.close();
        });
});