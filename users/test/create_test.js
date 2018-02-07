const {User}=require('../src/user');
const assert=require('assert');
const {mongoose}=require('../test/test_helper');




describe('create data',()=>{

    it('inserting a data',()=>{

       const joe = new User({name:'Joe',createdAt:new Date()});

       joe.save().then(()=>{

           console.log('Saved');
          assert(!joe.isNew)
       }).catch(()=>{

           console.log('Error in saving');
       })

    });

});