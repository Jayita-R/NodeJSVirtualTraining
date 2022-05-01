var Promise=require('promise');
var MongoClient=require('mongodb').MongoClient;

var url="mongodb://localhost:27017/StudentDB";


MongoClient.connect(url)
.then(function(data){
    var dbo=data.db('StudentDB');
    dbo.collection('student').insertOne({
        SId:"123487",
        SName:"Ritika",
        SClass:"9"
    })
   .then(function(data1){

        dbo.collection('student').insertOne({
            SId:"123480",
            SName:"Epsita",
            SClass:"11"
            

    })
    .then(function(data2){
        dbo.collection('student').insertOne({
            SId:"127466",
            SName:"Aishani",
            SClass:"5"

    })
    console.log("All the records inserted successfully");
});


 });
});

