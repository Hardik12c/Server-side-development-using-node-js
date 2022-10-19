const express= require('express');
const http=require('http');
const bodyparser=require('body-parser');

const hostname='localhost';
const port=3000;


// adding routers
const dishrouter=require('./router/dishrouter')
const promorouter=require('./router/promorouter');
const leaderrouter=require('./router/leaderrouter');


const app=express();
// app.use(bodyparser.json());

// dish router mounted
app.use('/dishes',dishrouter);

// promorouter mounted
app.use('/promotions',promorouter);

// leaderrouter mounted
app.use('/leader',leaderrouter);

const server=http.createServer(app);

server.listen(port,hostname,()=>{
    console.log(`server starts at http://${hostname}:${port}`);
})