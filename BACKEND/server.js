const express=require('express')
const app=express()
const port=8082;

app.get('/',(req,res)=>{
    res.send("this is my first server")
})
app.get('/about',(req,res)=>{
   
    const student=[
        {
            id:1,
            name:"aditya",
            class:"10"
        },
         {
            id:2,
            name:"sahil",
            class:"10"
        },
         {
            id:3,
            name:"manish",
            class:"10"
        },
         {
            id:4,
            name:"shiva",
            class:"10"
        },
         {
            id:5,
            name:"maruf",
            class:"10"
        }
    ];
    res.json(student);
})
app.get('/contact',(req,res)=>{
    res.send("7905442197")
})
app.listen(port,()=>{
    console.log(`server is run at:http://localhost:${port}`);
})