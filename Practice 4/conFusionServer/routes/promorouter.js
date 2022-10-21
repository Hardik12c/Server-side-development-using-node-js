const express=require('express');
const bodyparser=require('body-parser');

const promorouter=express.Router();

promorouter.use(bodyparser.json());

promorouter.route('/')
.all((req,res,next)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    next();
})
.get((req,res)=>{
    res.end("will send all promotions to you");
})
.post((req,res)=>{
    res.end(`will add the promotion ${req.body.name} with details ${req.body.description}`);
})
.put((req,res)=>{
    res.statusCode=403;
    res.end("PUT request not supported");
})
.delete((req,res)=>{
    res.end("Will delete all the items from promotions");
})

promorouter.route('/:promoid')
.get((req,res)=>{
    res.end(`Will send the info of the ${req.params.promoid} to you`)
})
.post((req,res)=>{
    res.statusCode=403;
    res.end("POST request not supported");
})
.put((req,res)=>{
    res.write(`Updating the promotions: ${req.params.promoid} \n`)
    res.end(`Will update the promotions: ${req.body.name} with details: ${req.body.description}`);
})
.delete((req,res)=>{
    res.end(`deleting the promotions: ${req.params.promoid}`);
});
module.exports=promorouter;