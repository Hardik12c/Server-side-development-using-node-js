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
})

// making all thie dishes with dishes id request
dishrouter.route('/:dishid')
.get((req,res)=>{
    res.end(`Will send the info of the ${req.params.dishid} to you`);
})
.post((req,res)=>{
    res.statusCode=403;
    res.end(`POST request not supported`);
})
.put((req,res)=>{
    res.write(`Updating the dish: ${req.params.dishid} \n`)
    res.end(`Will update the dish: ${req.body.name} with details: ${req.body.description}`);
})
.delete((req,res)=>{
    res.end(`deleting the dish: ${req.params.dishid}`);
});

module.exports=dishrouter;