const express = require('express');

const friendsRouter = require('./routes/friends.routers');
const messagesRouter = require('./routes/messages.routers');

const app = express();
const PORT = 3000;


app.listen(PORT, ()=> {
    console.log(`Server listening on PORT: ${PORT}...`);
});

// const friends = [                    friends array moved to models to allow access by controllers & other files
//     {                                getting treated like a DB
//     id: 0,
//     name: "Derek Shepherd"
//     },
//     {
//     id:1,
//     name: "Christina Yang"
//     },
//     {
//     id:2,
//     name:"George O'Malley"
//     }
// ]

app.use((req,res,next)=>{
    const start = Date.now();
    next();
    const delta = Date.now() - start;           //added here to clock processing time of all middlewares
    console.log(`${req.method} ${req.baseUrl}${req.url} in ${delta}ms`);
})

app.use(express.json())     //built in express middleware

// app.use(friendsRouter);         //map the router 
app.use('/friends',friendsRouter);  //map relative path remove /path from individuals
app.use('/messages',messagesRouter)