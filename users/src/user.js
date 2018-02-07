const mongoose=require('mongoose');
const Schema=mongoose.Schema;



var userSchema= new Schema({
    name:String,
    createdAt:Date
});

var User=mongoose.model('user',userSchema);





module.exports={
    User
};

