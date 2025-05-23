// npm module
// const color = require("cli-color");
// console.log(color.yellow("hello there good morning g"));


// local module
const identity = require('./auth');
identity.register('saleena');
identity.login("saleena", '27383939');

// core modules 
const path = require('path');
// 1) folder_name
console.log("folder name: ", path.dirname(__filename));

// 2) file name
console.log("file name: ", path.basename(__filename));

// 2) extension name
console.log("EXT name: ", path.extname(__filename));

// 2) Parse
console.log("Parse: ", path.parse(__filename));


// file system

// create folder
const fs = require('fs');
fs.mkdir(path.join(__dirname, 'test'), (err) => {
    if(err){
        console.log("something went wrong");
        return;
    }
    console.log("Folder created");
})

//  create file

// fs.writeFile(path.join(__dirname, 'test', 'test.txt'), 'hello jeee', (err)=>{
//     if(err){
//         throw err;
//     }
//     console.log("file created");
    
// })


const os = require('os');
console.log("uptime: ", os.uptime());
