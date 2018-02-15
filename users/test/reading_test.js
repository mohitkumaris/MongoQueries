const {User}=require('../src/user');
const assert=require('assert');
const {mongoose}=require('../test/test_helper');

describe('Fetching the users',()=>{
   it('Fetching by name',()=>{

       /*User.findOne({name:'Joe'},{_id:0,__v:0})
           .then((users)=>{

               console.log(users);
           });*/

       User.findOne({},{},{sort:{createdAt:-1}})
           .then((user)=>{
               console.log(user);
           });

   });

   it('can skip and limit the results',()=>{

     User.find({}).skip(2).limit(20).then((users)=>{

       console.log(users.length)
     });


   });

});