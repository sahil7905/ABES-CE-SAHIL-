const http=require('http');

 const myserver=http.createServer((req,res)=>{
    console.log('server 1');
    res.end('hello this is my first server');


})
myserver.listen(8000,()=> console.log('server is running')); 