const {User}=require('../src/user');
const assert=require('assert');
const {mongoose}=require('../test/test_helper');

describe('Virtual types',()=>{

    it('count the number of post',()=>{


      const samantha = new User({name:'Samantha',createdAt:new Date(),
        posts:[{title:'first post'},
          {title:'second post'}]});

      console.log(samantha.postCount);
    });
});