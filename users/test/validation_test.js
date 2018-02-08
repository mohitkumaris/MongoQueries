const {User}=require('../src/user');
const assert=require('assert');
const {mongoose}=require('../test/test_helper');

describe('Validating the records',()=> {

    it('requires a user name',()=>{

        const joe = new User({name:'Sam',createdAt:new Date(),postCount:1});
         let validateMessage=joe.validateSync();
         if(validateMessage)
         console.log(validateMessage.errors.name.message);
        joe.save();

    });

    it('requires a user name to be of length more than 2',()=>{

        const joe = new User({name:'Sa',createdAt:new Date(),postCount:1});
        let validateMessage=joe.validateSync();
        if(validateMessage)
            console.log(validateMessage.errors.name.message);
        joe.save();

    });


});