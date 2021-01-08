var mongoose = require('mongoose');
    
var rideSchema = new mongoose.Schema({
    r_name: { type: String },
    departure_time: {type : String},
    From: {type : String},
    To: {type : String},
    rate: {type : String},
    date: {type : String},
    contact: {type : String},
    email: {type : String}
});

mongoose.model('ride', rideSchema, 'ride');