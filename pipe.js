var fs=require('fs');

var zlib=require('zlib');

var readerStream=fs.createReadStream('input.txt');

var writeStream=fs.createWriteStream('output.txt');

readerStream.pipe(writeStream);

/*fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(
    fs.createWriteStream('input.txt.gz')
);
console.log("File Compressed Successfully");*/

fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(
    fs.createWriteStream('file1.txt')
);
console.log("File Decompressed Successfully");


console.log("Program Ended!");