import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoyalApiProvider } from '../../providers/royal-api/royal-api';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var window: any;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  map: any = {};
  currentEstate: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public royalApi: RoyalApiProvider) {
    this.currentEstate = navParams.data.estate;
  }

  getDirections() {
    window.location = `geo:${this.map.lat},${this.map.lng};u=35`;
  }

  goToDirections() {
    window.location = `geo:${this.currentEstate.latitude},${this.currentEstate.longitude};u=35;`;
  }

  ionViewDidLoad() {
    this.map = {
      lat: this.currentEstate.latitude,
      lng: this.currentEstate.longitude,
      zoom: 15,
      markerLabel: this.currentEstate.refNumber
    };
  }
}
