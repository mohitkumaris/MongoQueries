const {User}=require('../src/user');
const assert=require('assert');
const {mongoose}=require('../test/test_helper');

describe('Deleting a User',()=>{

    it('Delete a record',()=>{


        User.remove()
            .then(()=>{
               console.log('All Deleted');
            });

       /* User.findOneAndRemove({name:'Joe'})
            .then((user)=>{

                console.log(user);
            });*/

    });

});