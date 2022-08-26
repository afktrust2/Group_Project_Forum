const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fName: {type: String, required: true},
    lName: {type: String, required: true},
    password: {type: String, required: true},
    },
{timestamps: true},
);

const CommentSchema = new mongoose.Schema({
    post:{type: String, required: true},
    user:[UserSchema]
    }, 
    {timestamps: true},
);

const ForumSchema = new mongoose.Schema({
    title:{type: String, required: true},
    description:{type: String, required: true},
    user:[UserSchema]
    }, 
    {timestamps: true},
);

const Forum = mongoose.model("Forum", ForumSchema);
const Comment = mongoose.model("Comment", CommentSchema);
const User = mongoose.model("User", UserSchema);

module.exports = {Forum, Comment, User};