const {Schema}=require('./Schema');
const {mongoose}=require('./Schema')

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
   // postCount:Number,
    posts:[postSchema],
    blogPosts:[{
       type:Schema.Types.ObjectId,
      ref:'blogPost'
    }]

});

// Creating virtual type to get value on the fly.
userSchema.virtual('postCount').get(function () {

  return this.posts.length;

});

var User=mongoose.model('user',userSchema);

//=>name.length>2



module.exports={
    User
};

