const mongoose=require('mongoose');

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost:27017/users_test');

mongoose.connection
.once('open',()=>{
console.log('Good to go!');
})
.on('error',(error)=>{
console.warn('Warning',error);
});


/*beforeEach((done)=>{

    mongoose.connection.collections.user.drop(()=>{

        // Now the next test case can run
        done();
    });
});
*/

module.exports={
    mongoose
}