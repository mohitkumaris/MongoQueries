const mongoose=require('mongoose');
const Schema=mongoose.Schema;

var postSchema= new Schema({
    title:String
});


var userSchema= new Schema({
name:{
   type: String,
    required:[true,'Name is required'],
    unique:true,
    validate:{
       validator:(name)=>{
           if(name.length > 2 )
               return true;
           else
               return false;

       },
        message:'Length should be greater than 2 and should not include Mark'
    }
},
    createdAt:Date,
    postCount:Number,
    posts:[postSchema],

});

var User=mongoose.model('user',userSchema);

//=>name.length>2



module.exports={
    User
};

