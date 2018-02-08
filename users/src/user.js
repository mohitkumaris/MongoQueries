const mongoose=require('mongoose');
const Schema=mongoose.Schema;



var userSchema= new Schema({
name:{
   type: String,
    required:[true,'Name is required'],
    unique:true,
    validate:{
       validator:(name)=>name.length>2,
        message:'Length should be greater than 2'
    }
},
    createdAt:Date,
    postCount:Number
});

var User=mongoose.model('user',userSchema);





module.exports={
    User
};

