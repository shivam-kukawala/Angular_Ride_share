import { Component, OnInit } from '@angular/core';
import {Ride} from '../ride';
import { RideServiceService} from '../ride-service.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  rides: Ride[] = [];
  showMainContent: Boolean = true;
  temp : Ride[] = [];
  a : string;

  constructor(private rideService : RideServiceService) { }

  ngOnInit(): void {
    this.rideService.getRide()
    .then(results => {
      this.rides = results;
      console.log(results);
    });
  }

  Search(a) {
    this.a = a;
    // var test = this.rides.filter(x => x.From=== a);
    // console.log(test);
    
  }

  ShowHideButton(a) {
    console.log("called");
    this.a = a;
    this.temp = this.rides.filter(x => x.From.toLowerCase().includes(this.a.toLowerCase()));
    console.log(this.temp);
    this.showMainContent = this.showMainContent ? false : true;
 }


}
