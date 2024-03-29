const mongoose = require("mongoose")

const FeedbackData = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const User = mongoose.model("User", FeedbackData)

module.exports = User;
