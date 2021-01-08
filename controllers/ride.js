require('../models/ride');
var mongoose = require('mongoose');
var ride = mongoose.model('ride');


const sendsJSONresponse = function (res, status, content) {
    res.status(status).json(content);
}

const getride = function (req, res)
{

   ride.find().exec(function(err, ridedata)
   {
        if(err)
        {
            res
            .status(404)
            .json(err);
        return;
        }
            res
            .status(200)
            .json(ridedata);

   });
};

const createRide = function(req, res){
    ride.create({
        r_name : req.body.r_name,
        departure_time : req.body.departure_time,
        From : req.body.From,
        To : req.body.To,
        rate : req.body.rate,
        date : req.body.date,
        contact : req.body.contact,
        email : req.body.email
    },(err, ridedata) => {
        if(err){
            res
            .status(400)
            .json(err);
        }
        else {
            res
            .status(201)
            .json(ridedata)
        }
    })
}

const rideInfo = function (req, res){
    if (!req.params || !req.params.rideid){
        res 
        .status(400)
        .json({
            "message" : "The rideid param is required"
        });
        return;
    }

    try {
        ride.findById(req.params.rideid).exec(function(err, ridedata){
            
            if(err){
                sendsJSONresponse(res, 500, err);
                return;
            }
             if(!ridedata){

                 sendsJSONresponse(res, 404, {message : "ride not found"});
                 return;
             }
             sendsJSONresponse(res, 200, ridedata);
        })
    }
    catch(err){
     sendsJSONresponse(res, 500, err);   
    }
}

const deleteRide = function(req, res){
    const rideid = req.params.rideid;
    console.log(rideid);

    if(rideid) {
        ride
        .findByIdAndRemove(rideid)
        .exec((err, ridedata) => {
            if(err){
                res
                .status(404)
                .json(err);
                return;
            }else{
                res
                .status(204)
                .json("success");
            }

        });
    }
    else{
        res
        .status(404)
        .json({"message" : "no rideid"});
    }
}

module.exports = {
    getride,
    createRide,
    rideInfo,
    deleteRide
};