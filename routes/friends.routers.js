const express = require('express');

const friendsController = require('../controllers/friends.controllers');

const friendsRouter = express.Router();

friendsRouter.use((req,res,next) => {
    console.log(`Your IP Address is : ${req.ip}`);
    next();
});
friendsRouter.post('/',friendsController.postFriends);
friendsRouter.get('/',friendsController.getFriends);
friendsRouter.get('/:friendId',friendsController.getFriend);


module.exports = friendsRouter;