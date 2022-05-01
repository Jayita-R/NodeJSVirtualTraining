var fs=require('fs');

console.log("This gives me file information");

fs.stat('input.txt',function(err,stats){
    if(err){
        return console.log(err);
    }
    console.log(stats);
    console.log("File information gathered successfully");

    console.log("isFile ?"+stats.isFile());
    console.log("isDirectory ?"+stats.isDirectory());
});