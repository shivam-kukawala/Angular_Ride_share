import { Component, OnInit } from '@angular/core';
import {Ride} from '../ride';
import {RideServiceService} from '../ride-service.service';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.css'],
  providers: [RideServiceService]
})
export class RideDetailsComponent implements OnInit {

  constructor(private rideService : RideServiceService, private route: ActivatedRoute) { }

  newRide: Ride; pageContent = { header: { title: '', body: ''}};
  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {return this.rideService.getSingleRide(params.rideid);}))
    .subscribe((newRide: Ride) => {
      console.log('Selected Ride', newRide);
      this.newRide = newRide;
      this.pageContent.header.title = newRide.r_name;
      this.pageContent.header.body = 'DetailsForSelectedRide.';
    })
  }

  public delete(){
    console.log(this.newRide._id);
    this.rideService.deleteRide(this.newRide._id);
  }
  

}
