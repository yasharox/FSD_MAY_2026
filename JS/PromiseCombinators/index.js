

const fsw = require('node:fs/promises');

console.log('Start');

const promise1 = fsw.writeFile('inpt1.txt','inpt2.txt', err =>{

    if (err){
        console.log(err);
        return;
    }
    console.log( 'File written successfully');
});