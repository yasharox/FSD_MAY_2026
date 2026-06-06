
const { error } = require('console');
const fs = require('fs'); // file system

//  fs.readFile("./msg.txt","utf8", (error, data) =>{

//     console.log(data);
//  })

//  const data = "New file create in node mashallah"

// fs.writeFile("./quote.txt", data,  (error) =>{
//     console.log("completed writing");
// })

// // const name = "yashar"

// // fs.writeFile("./awesome.txt", name,  (error) =>{
// //     console.log("completed overwriting");
// // })

// const name2 ="\nAllah"
// fs.appendFile("./awesome.txt", name2,  (error) =>{
//     console.log("completed updating");
// })

// const [  , , num1, num2 ] = process.argv;

// const content = "same content to all files";

// for ( let i=num1; i<= num2; i++){

//     fs.writeFile(`./backups/test-${i}.txt`, content,  (error) =>{
//     console.log("completed writing");
// })

// }


// fs.readFile("./msg.txt","utf8", (error, data) =>{

//     console.log(data);

//         fs.writeFile("./cool.txt", data,  (error) =>{
//         console.log("completed writing cool text file ");
//     })

//  })

//  fs.unlink( './removefile.css', (err) =>{
//     console.log("deleted successfully !!");
//  })

fs.readdir("./backups", (err, files) =>{

    console.log(files);
})