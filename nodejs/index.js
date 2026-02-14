// const http=require('http');


// const myserver=http.createServer((req,res)=>{
//     // console.log('serever 1');
//     // res.end("this is my first server");
//     if(req.url=='/'){
//         res.end(`abes engineering college`);

        

//     }
//     else if(req.url=='/about'){
//         res.end("we are studdent");
//     }
//     else if(req.url=='/class'){
//         res.end("CE");
//     }
//     else
//     {
//         res.end("error");
//     }

// })
// myserver.listen(8000,()=>console.log("server is run"))


// const fs=require('fs');
// fs.cpSync("A.txt","IT-A.txt");

// const fs =require('fs')
// fs.appendFileSync("./IT-A.txt",`ans we are coader`);

// const fs=require('fs');
// fs.unlinkSync("./IT-A.txt");


// const fs = require('fs');

// fs.cp("CE-A.txt", "cse.txt", (err) => {
//     if (err) {
//         console.log("Error:", err);
//     } else {
//         console.log("File copied");
//     }
// });

// const fs = require('fs');

// fs.appendFile("CSE.txt", "\nNew Data Added", (err) => {
//     if (err) {
//         console.log("Error:", err);
//     } else {
//         console.log("Data appended successfully");
//     }
// });



const os=require('os')
console.log("plateform",os.platform()); // window os
console.log("user",os.userInfo);
console.log("cpu",os.arch());
console.log("free memory",os.freemem(),"bytes");
console.log("total memory",os.totalmem(),"bytes");
console.log("system update",os.uptime());
console.log("host name",os.hostname());







// const fs=require('fs')
// fs.writeFile("./IT-A.txt","we are student of it-a",()=>{ })

    // fs.readFile("./IT-A","utf-8",(err,result)=>{
    //     if(err){
    //         console.log("error",err);
    //     }
    //     else{
    //         console.log(result);
    //     }
    // })

// const fs=require('fs')
// // fs.writeFileSync("abes.txt","abes provide btech and mtech")
// const result=fs.readFileSync("./cse-a.txt","utf-8")
// console.log(result);
