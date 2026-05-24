

// const os=require('os');
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.platform);

const fs=require('fs');
fs.readFile('message.txt',(err,data)=>{
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});

// fs.writeFile('message.txt','Hello World',(err)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log('File written successfully');
//     }   
// });

fs.appendFile('message.txt','Hello World Again',(err)=>{
    if(err){
        console.log(err);
    } else {
        console.log('File appended successfully');
    }
});

// fs.unlink('message.txt',(err)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log('File deleted successfully');
//     }
// });