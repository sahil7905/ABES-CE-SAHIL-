const http=require('http');


const myserver=http.createServer((req,res)=>{
    // console.log('serever 1');
    // res.end("this is my first server");
    if(req.url=='/'){
        res.end(`abes engineering college`);
        
        

    }
    else if(req.url=='/about'){
        res.end("we are studdent");
    }
    else if(req.url=='/class'){
        res.end("CE");
    }
    else
    {
        res.end("error");
    }

})
myserver.listen(8000,()=>console.log("server is run"))