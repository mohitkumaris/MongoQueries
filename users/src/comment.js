const {Schema}=require('./Schema');
const {mongoose}=require('./Schema')

const CommentSchema= new Schema({

   content:String,
   user:{
     type:Schema.Types.ObjectId,
     ref:'user'
   }

});

const Comment = mongoose.model('comment',CommentSchema);


module.exports={
  Comment
}