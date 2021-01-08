var mongoose = require('mongoose');
const dbURI = 'mongodb+srv://shivam:UBDkkDI0EKz8BasQ@cluster0.edac3.mongodb.net/rideshare?retryWrites=true&w=majority';

mongoose.connect(dbURI);
mongoose.connection.on('connected', function(){
    console.log('mongoose is connected to:' + dbURI);
});

mongoose.connection.on('error', function(err){
    console.log('mongoose  connection error :' + err);
});

mongoose.connection.on('disconnected', function(){
    console.log('mongoose is disconnected :' + dbURI);
});

require('./ride');