const {User}=require('../src/user');
const assert=require('assert');
const {mongoose}=require('../test/test_helper');


function find(operation,name) {
    operation.then(()=>User.findOne({name:name})
        .then((user)=>{
            console.log(user);
        }));
}

describe('Updating the records',()=>{

    it('update the record findOneandUpdate',()=>{

        let query={name:'Joe'};
        let newname='Mike';
        find(User.findOneAndUpdate(query,{name:newname}),newname);

        
    });
  
    it('Using set and save for update',()=>{

        const joe = new User({name:'Joe',createdAt:new Date()});
         let newname='mark';
        joe.set({name:newname});

        find(joe.save(),newname);

    });

});