const path = require('path');

function getMessages(req, res) {
        // res.send({
        //     id: 1,
        //     date : '09-06-2023',
        //     intent : "Welfare Check",
        //     content : "How are you?",
        // });

       // res.sendFile(path.join(__dirname,"..","public","sunset.jpg"));

       res.render('messages.hbs',{
        friend:"Derek Shepherd",
        title: "Conversation"
       })
}

function postMessages(req,res)
{
    console.log("Updating the messages ...");
    res.end();
}

module.exports = {
    getMessages,
    postMessages
}