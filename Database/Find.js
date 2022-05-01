var MongoClient=require('mongodb').MongoClient;

var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    var dbObject=db.db('mydb');
    dbObject.collection("employee").find({},{projection:{_id:0,name:1,address:1}
    }).toArray(function(err,result){
        if(err)throw err;
        console.log(result);
       // db.close();
        console.log("--------------------------------------------");
        // Checking for another result by the below code
        dbObject.collection("employee").find({},{projection :{address: 1}
        }).toArray(function(err,result){
            if(err)throw err;
            console.log(result);
        db.close();
    });
});
});