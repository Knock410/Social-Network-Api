const { User } = require('../models');
 
const userController = {
    //get all users
    getAllUsers(req, res) {
        User.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.sendStatus(400);
              });
            },
    //get one user by id 
getUsersById({ params}, res) {
    User.findOne({ _id: params.id}).then(dbUserData => res.json(dbUserData)).catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
},


module.exports = userController;