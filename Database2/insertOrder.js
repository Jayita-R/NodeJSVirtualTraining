var MongoClient=require('mongodb').MongoClient;

var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo=db.db('mydatabase');

    var dbData=[{
        o_id: 101, 
        p_id: 154, 
        status: 1 
    },
    {
        o_id: 102, 
        p_id: 156, 
        status: 1 

    }
];
     dbo.collection("orders").insertMany(dbData,function(err,response){
       if(err) throw err;
    console.log("Data inserted successfully");
    db.close();
});
});