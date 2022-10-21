const express= require('express');
const bodyparser= require('body-parser');

const leaderrouter=express.Router();

leaderrouter.use(bodyparser.json());

leaderrouter.route('/')
// making all leader request
.all((req,res,next)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    next();
})
.get((req,res)=>{
    res.end("will send all the leader to you");
})
.post((req,res)=>{
    res.end(`will add the leader ${req.body.name} with details ${req.body.description}`);
})
.put((req,res)=>{
    res.statusCode=403;
    res.end("PUT request not supported");
})
.delete((req,res)=>{
    res.end("deleting all the leaders");
})

// making all thie leader with leader id request
leaderrouter.route('/:leaderid')
.get((req,res)=>{
    res.end(`Will send the info of the ${req.params.leaderid} to you`);
})
.post((req,res)=>{
    res.statusCode=403;
    res.end(`POST request not supported`);
})
.put((req,res)=>{
    res.write(`Updating the leader: ${req.params.leaderid} \n`)
    res.end(`Will update the leader: ${req.body.name} with details: ${req.body.description}`);
})
.delete((req,res)=>{
    res.end(`deleting the leader: ${req.params.leaderid}`);
});

module.exports=leaderrouter;