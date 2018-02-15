
const {Schema}=require('./Schema');
const {mongoose}=require('./Schema')

const BlogPostSchema=new Schema({

     title:String,
     content:String,
     comments:[{
       type:Schema.Types.ObjectId,
       ref:'comment'
     }]


});

const BlogPost=mongoose.model('blogPost',BlogPostSchema);

module.exports={
  BlogPost
}