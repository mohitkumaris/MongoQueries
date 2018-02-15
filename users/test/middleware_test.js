const {User}=require('../src/user');
const assert=require('assert');
const {mongoose}=require('../test/test_helper');
const {BlogPost}=require('../src/blogpost');

describe('Using middleware',()=>{

  it('remove blogposts',()=>{

    User.findByIdAndUpdate({_id:'5a845bcf9385faac2a58d941'}, {
      $pull: {
        blogPosts: {_id: '5a845bcf9385faac2a58d942'}
      }
    }).then((user)=>{
      console.log(user)
    }).catch((err)=>{
      console.log(err);
    });

  });


});
