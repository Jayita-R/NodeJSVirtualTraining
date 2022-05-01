var MongoClient=require('mongodb').MongoClient;

var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo=db.db('mydatabase');

    var dbData=[{ p_id: 154, p_name: 'Dark Chocolate Biscuit' },
    { p_id: 155, p_name: 'Oreo' },
    { p_id: 156, p_name: 'Uncle Chips' }
];
     dbo.collection("products").insertMany(dbData,function(err,response){
       if(err) throw err;
    console.log("Data inserted successfully");
    db.close();
});
});