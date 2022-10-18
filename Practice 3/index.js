const express= require('express');
const http=require('http');
const bodyparser=require('body-parser');

const hostname='localhost';
const port=3000;


const app=express();
app.use(bodyparser.json());

// making all dishes request
app.all('/dishes',(req,res,next)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    next();
});

// only for dish
app.get('/dishes',(req,res)=>{
    res.end("will send all the dishes to you");
});

app.post('/dishes',(req,res)=>{
    res.end(`will add the dish ${req.body.name} with details ${req.body.description}`);
});

app.put('/dishes',(req,res)=>{
    res.statusCode=403;
    res.end("PUT request not supported");
});

app.delete('/dishes',(req,res)=>{
    res.end("deleting all the dishes");
});


// for dish with dishId
app.get('/dishes/:dishid',(req,res)=>{
    res.end(`Will send the info of the ${req.params.dishid} to you`);
});

app.post('/dishes/:dishid',(req,res)=>{
    res.statusCode=403;
    res.end(`POST request not supported`);
});

app.put('/dishes/:dishid',(req,res)=>{
    res.write(`Updating the dish: ${req.params.dishid} \n`)
    res.end(`Will update the dish: ${req.body.name} with details: ${req.body.description}`);
});
app.delete('/dishes/:dishid',(req,res)=>{
    res.end(`deleting the dish: ${req.params.dishid}`);
});






// app.use(express.static(__dirname+'/public'));
// app.use((req,res,next)=>{
//     res.statusCode=200;
//     res.setHeader('Content-Type','text/html');
//     res.end('<html><body><h1>This is an Express server</h1></body></html>');
// });
    const server=http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`server starts at http://${hostname}:${port}`);
})