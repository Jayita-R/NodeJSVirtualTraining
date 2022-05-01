var fs=require('fs');

var data="We are learning something new today";

var writeStream=fs.createWriteStream('output.txt');

writeStream.end();

writeStream.on('data',function(info){
    data+=info;

});

writeStream.on('finish',function(){
    console.log("Write Completed");
    console.log(data);
});

writeStream.on('error',function(err){
    console.log(err.stack);
});

console.log("Program Ended");