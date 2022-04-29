var fs=require('fs');
fs.readFile('text.txt',function(err,data){
    if(err){
        console.log(error);
    }
    setTimeout(()=>{
        console.log("Display after 5 seconds of time");
        console.log("Server responded after 2 minutes of time")
    },5000);
    });
console.log("Server starts here but waits for 5 miliseconds");