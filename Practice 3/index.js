const express= require('express');
const http=require('http');
const bodyparser=require('body-parser');

const hostname='localhost';
const port=3000;

const dishrouter=require('./router/dishrouter')

const app=express();
app.use(bodyparser.json());

app.use('/dishes',dishrouter);


app.use(express.static(__dirname+'/public'));
app.use((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>This is an Express server</h1></body></html>');
});

const server=http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`server starts at http://${hostname}:${port}`);
})