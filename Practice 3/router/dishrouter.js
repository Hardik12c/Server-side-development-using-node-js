const express= require('express');
const bodyparser= require('body-parser');

const dishrouter=express.Router();

dishrouter.use(bodyparser.json());

dishrouter.route('/')
// making all dishes request
.all((req,res,next)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    next();
})
.get((req,res)=>{
    res.end("will send all the dishes to you");
})
.post((req,res)=>{
    res.end(`will add the dish ${req.body.name} with details ${req.body.description}`);
})
.put((req,res)=>{
    res.statusCode=403;
    res.end("PUT request not supported");
})
.delete((req,res)=>{
    res.end("deleting all the dishes");
});

module.exports=dishrouter;