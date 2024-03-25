const express = require("express");
const  mongoose = require("mongoose")
const cors = require("cors");
const User = require("./Model/Feedback")

const server = express();
server.use(express.json());
server.use(cors());


server.use(express.urlencoded({extended: true}))


const MONGODB_URL = 'mongodb+srv://20BCS4891:abhishek00@learnmongodb.nlx0aas.mongodb.net/?retryWrites=true&w=majority'
// const MONGODB_URL = 'mongodb://127.0.0.1:27017/userdata';

mongoose.connect(MONGODB_URL)
.then(()=>{
    console.log("Database connected");
})
.catch((error)=>{
    console.log(error);
})

server.post('/feedback', async(req, res)=>{
    const email = req.body.email
    const message = req.body.message

    const formData = new User({
        email: email,
        message: message
    })

    try{
        await formData.save();
        res.send("Data Sent...");
    }
    catch(err){
        console.log(err);
    }
});



server.listen(5000, ()=>{
    console.log("App running on port: 5000")
})