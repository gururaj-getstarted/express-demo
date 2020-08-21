const express=require('express');
const app=express();
const myport=8080;

app.use(express.static('static'));

app.listen(myport,function(){
    console.log("listening to port: "+myport);
});

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

