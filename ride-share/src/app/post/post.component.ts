import { Component, OnInit } from '@angular/core';
import { Ride } from '../ride';
import {RideServiceService} from '../ride-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [RideServiceService]
})
export class PostComponent implements OnInit {
  public newRide : Ride = {
    _id: '',
   r_name: '', 
   departure_time: '' ,
   From : '',
   To : '',
   rate : '',
   date : '',
   contact : '',
   email : ''
   
  }

  constructor(private rideService  : RideServiceService) { }

  ngOnInit(): void {
  }

  public createNewRide(newRide : Ride) : void {

    if (this.newRide.r_name == "" || this.newRide.departure_time == "" || this.newRide.From == "" 
    || this.newRide.To == "" || this.newRide.rate == "" || this.newRide.date == ""
    || this.newRide.contact == "" || this.newRide.email == "" ) {
      window.alert('Trip not Posted, All fields are required');
      return;
    }

    else{
      this.displayMessage();
    }

    // check whether your required fields are empty or not
    this.rideService.createTrip(newRide);
  }
 public displayMessage(){
   window.alert('Trip Posted');
 }


}
