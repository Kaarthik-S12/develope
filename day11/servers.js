const express =require('express');
const server=express();
const port=5000;
server.get('/',(req,res)=>{
    res.end("server running");

});
server.listen(port,()=>
    console.log('hgfu')
);
