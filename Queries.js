const  mongoose  =  require('mongoose');

mongoose.connect('mongodb://192.168.108.181:27017/NedBank').then((db) => {

},(err) => {
    console.log(err);
});


var Schema=mongoose.Schema;
var NewObjects= new Schema({

    Data : { type : Object},

    Schema:{

        type:Object
    }

});

var objectmodel = mongoose.model('Objects',NewObjects,'Objects');

objectmodel.find({'Schema.ObjectType':0 }).then( (doc) => {
    console.log( doc);


}).catch( (err) => { console.log(err)});