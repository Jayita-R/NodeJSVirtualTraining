var MongoClient=require('mongodb').MongoClient;

//var url=require('url');

var url="mongodb://localhost:27017/"

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo=db.db('mydb');
    var dataObj=[{
        name:"TechMasters Inc.",
        address:"Bangalore",
        known_for:"Quality Training"
    },
    {name:"Jayita",
     age:"23",
    city:"Howrah"
    },
    {name:"Ishita",
     age:"30",
    city:"Kolkata"
    },
    {
        name:"Prantika",
     age:"27",
    city:"USA"

    },
];

    dbo.collection("employee").insertMany(dataObj,function(err,response){
        if(err) throw err;
        console.log("Multiple documents inserted");
        console.log("Number of records inserted "+response.insertedCount);
        db.close();

    });

});