const fs = require ('node:fs');

const fsp = require ('node:fs/promises');

// console.log(fs);

// console.log('Start');

// // call back way for reading file

// // readfile is a async operation - > regstered in wen api and call back is stored
// fs.readFile('abc.txt', (err,data) => {// reading a file with the call back

//     if(err){
//         throw err;
//     }

//     console.log( data.toString());
// });

// console.log('End');

// synchronous way of execution



// promises way

console.log( 'Start');

const promise1 = fsp.readFile('abc.text');

promise1
    .then((data1) => {
        console.log(data1.toString());
        return fsp.readFile('def.txt');
    })
    .then((data2) => {
        console.log(data2.toString());
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('Inside finally');// finally is to cleanup no values - undefini ed
    })

console.log('END');