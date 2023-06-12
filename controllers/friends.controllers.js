const friendsModel = require("../models/friends.models");

function postFriends(req,res) {  
    if(!req.body.name)                  //check for validity
    {
        res.status(400).json({
            error: "Please provide valid data for name!"
        })
    }
    else{
        const newFriend = {
            id: friendsModel.friends.length,          //for ideal value of length
            name: req.body.name        // req.body comes from express.json and won't work without it
        }
        friendsModel.friends.push(newFriend);
        console.log(`${req.body.name} added successfully as your new Friend!`);
        res.status(200).json(newFriend);            //without this no response shown in the POSTMAN WHY??
    }
}


function getFriends (req,res) {
    res.json(friendsModel.friends);
}


function getFriend (req,res){
    const friendId = req.params.friendId;
    const friend = friendsModel.friends[Number(friendId)];
    if(friend)
    {
        res.send(friend);
    }
    else{
        res.status(404).json({
            error: "Sorry, You don't have a friend with this id"
        })
    }
}


module.exports = {
    postFriends,
    getFriends,
    getFriend
}