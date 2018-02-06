const {User}=require('../src/user');
const assert=require('assert');
const {mongoose}=require('../test/test_helper');




describe('create data',()=>{

    it('inserting a data',()=>{

       const joe = new User({name:'Joe'});

       joe.save().then(()=>{

           console.log('Saved');
       }).catch(()=>{

           console.log('Error in saving');
       })

    });

});