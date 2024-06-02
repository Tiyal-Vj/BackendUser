const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/minormajor');

const userSchema = mongoose.Schema({
    
    username:String,
    email:String,
    age:Number,
    password:String,
    posts:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    }]
})

module.exports = mongoose.model("user", userSchema);
