var MongoClient=require('mongodb').MongoClient;

var url="mongodb://127.0.0.1:27017/";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo=db.db('mydatabase');
    dbo.collection("orders").aggregate([
        {$lookup:
            {
                from:'products',
                localField:'p_id',
                foreignField: 'p_id',
                as:'orderdetails'
            }
        }
    ]).toArray(function(err,response){
        if(err) throw err;
        console.log(JSON.stringify(response));
        db.close();

    });
});