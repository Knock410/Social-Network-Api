const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
 
    username: {
        type: String,
        required: true,
        trim: true,
        unique :true 
    },
    email: { 
        type: String,
        required: true,
        unique :true,
    },
    thoughts: {
        thoughts: [
            {
                ref:'thoughts'
            }
        ]
    },
    Friend
},
);
   //creates the pizza model using the UserSchema 
const User = model('User', UserSchema);

module.exports = User;
 
//  username

//  String
//  Unique
//  Required
//  Trimmed

//  email
 
//  String
//  Required
//  Unique
//  Must match a valid email address (look into Mongoose's matching validation)

//  thoughts
 
//  Array of _id values referencing the Thought model

//  friends

