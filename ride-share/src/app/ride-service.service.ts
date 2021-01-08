import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Ride} from './ride';

@Injectable({
  providedIn: 'root'
})
export class RideServiceService {

  private readonly baseUrl = 'http://localhost:3000';
  private ridesUrl = 'http://localhost:3000/api/ride';
  private handleError(error: any) {
    console.log("error");
  }

  constructor(private http: HttpClient) { }

  getRide(){
    return this.http
    .get(this.ridesUrl)
    .pipe(map((rides: Ride[])=>{
      return rides;
    })).toPromise();
  }


  createTrip(newRide : Ride) {
    return this.http
    .post(this.ridesUrl, newRide)
    .subscribe(
      data => {
        window.location.href = '';
      },
      error => {
        console.log("ERROR", error, this.handleError);
      }
    );
  }

  getSingleRide(rideid: string): Promise<void | Ride>{
    return this.http
    .get(this.ridesUrl + '/' + rideid)
    .toPromise()
    .then(response => response as Ride)
    .catch(this.handleError);
  }

  deleteRide(rideid: string){
    console.log(rideid);
    return this.http
    .delete(this.ridesUrl + '/' + rideid)
    .subscribe(
      data => {
        window.location.href = '';
      },
      error => {
        console.log("ERROR" + error, this.handleError);
        
      }
    )
    ;
  }
}
