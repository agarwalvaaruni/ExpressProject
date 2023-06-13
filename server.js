const express = require('express');
const path = require('path');

const friendsRouter = require('./routes/friends.routers');
const messagesRouter = require('./routes/messages.routers');

const app = express();
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views'));

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

app.use('/site',express.static(path.join(__dirname,'public')));
app.use(express.json())     //built in express middleware

// app.use(friendsRouter);         //map the router 

app.get('/',(req,res)=>{
    res.render('index.hbs',{
    title: "My Friends are Surgeons!!",
    caption: "Let's Watch Sunset",
})
});
app.use('/friends',friendsRouter);  //map relative path remove /path from individuals
app.use('/messages',messagesRouter)