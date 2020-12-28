import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class RoyalApiProvider {
  private baseUrl = 'https://royal-estates-65ca8-default-rtdb.firebaseio.com/';
  currentLocation: any = {};

  constructor(public http: HttpClient) {
    console.log('Hello RoyalApiProvider Provider');
  }

  getLocations(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/locations.json`)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getLocationsData(locationId) : Observable<any> {
    return this.http.get(`${this.baseUrl}/locations-data/${locationId}.json`)
        .map(response => {
            this.currentLocation = response;
            return this.currentLocation;
    });
  }

  getCurrentLocation(){
    return this.currentLocation;
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err);
    return Observable.throw(err);
  }

}
