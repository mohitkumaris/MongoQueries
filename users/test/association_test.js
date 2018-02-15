const {User}=require('../src/user');
const assert=require('assert');
const {mongoose}=require('../test/test_helper');
const {Comment}=require('../src/comment');
const {BlogPost}=require('../src/blogpost');

describe('Associations',()=>{

  it('check the association',()=>{

    const userblog=new User({name:'Mohit'});
    const blog=new BlogPost({title:'new Blog on JS',content:'Nice content'});
    const comment= new Comment({content:'yes its great'});


    userblog.blogPosts.push(blog);
    blog.comments.push(comment);
    comment.user=userblog;

    // Use Promis.all when working with Associations

    Promise.all([userblog.save(),blog.save(),comment.save()])
      .then(()=>{
        console.log('All done');
      }).catch((err)=>{
        console.log(err);
      });


  });

  it.only('Retrieve associated documents',()=>{

       User.findOne({name:'Mohit'},{_id:0,__v:0})
         .populate({
           path:'blogPosts',
           populate:{
             path:'comments',
             model:'comment',
             populate:{
               path:'user',
               model:'user'
             }
           }
         })

         .then((user)=>{

           console.log('BlogPosts:'+user.blogPosts[0]+','+
             'Comments:'+user.blogPosts[0].comments);
         });


  });





});