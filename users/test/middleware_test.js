const {User}=require('../src/user');
const assert=require('assert');
const {mongoose}=require('../test/test_helper');
const {BlogPost}=require('../src/blogpost');

describe('Using middleware',()=>{

  it('remove blogposts when user gets deleted',()=>{

    User.findById({_id:'5a845bcf9385faac2a58d941'}).
      then((user)=>{

       return user.remove()

    }).then((usr)=>{
        console.log(usr);
    });


  });

  it('remove blogpost from User blog',()=>{

       User.update({_id:'5a859c07af55c80c526a9bca'},{$pull:{blogPosts:'5a859c07af55c80c526a9bcb'}},
         {new:true})
         .then((user)=>{

           console.log(user);

         });

  });

  it('remove comment of particular user',()=>{

    BlogPost.update({_id:'5a85b7f5e1c1eb184f134d4f'},{$pull:{comments:'5a85b7f5e1c1eb184f134d50'}},
      {new:true})
      .then((blog)=>{
        console.log(blog);
      });

  });


});
