var MongoClient=require('mongodb').MongoClient;

var url="mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo=db.db('mydb2');

    var dbData=[{
        BName:"ICICI",
        BBranch:"Ramrajatala",
        BCity:"Howrah"
    },
    {
        BName:"Axis",
        BBranch:"Salt Lake Sector5",
        BCity:"Kolkata"
    },
    {
        BName:"HSBC",
        BBranch:"Rajarhat",
        BCity:"Kolkata"
    },
    {
        BName:"J.P.Morgan",
        BBranch:"Electronics Complex",
        BCity:"Bangalore"
    },
    {
        BName:"Axis",
        BBranch:"Ramrajatala",
        BCity:"Howrah"
    },
    {
        BName:"Morgan Stanley",
        BBranch:"Mannata Park",
        BCity:"Bangalore"
    },
    {
        BName:"SBI",
        BBranch:"Shibpur",
        BCity:"Howrah"
    }

];
    dbo.collection("Bank").insertMany(dbData,function(err,response){
        if(err) throw err;
        console.log("Data inserted successfully");
        db.close();
    });

});