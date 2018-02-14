const {User}=require('../src/user');
const assert=require('assert');
const {mongoose}=require('../test/test_helper');

describe('Subdocuments',()=>{

    it('Insert Subdocumemt',()=>{

        const joe = new User({name:'Joe',createdAt:new Date(),
            posts:[{title:'first post'},
                {title:'second post'}]});

        joe.save()
            .then((users)=>{
                console.log(users.posts[0].title);
            })
    });

    it('Update existing data into Subdocumemt',()=>{

        User.findOneAndUpdate({name:'Shawn'},{posts:[{title:'shawn post'}]})
            .then((user)=>{
                console.log(user);
            });



    });

    it('Remove sub document',()=>{

        const helen = new User({name:'Helen',createdAt:new Date(),
            posts:[{title:'first post'},
                {title:'second post'}]});

        helen.save()
            .then(()=>User.findOne({name:'Helen'}))
            .then((user)=>{

                let post=user.posts[0];
                post.remove();

                return user.save();

            });

    });


});