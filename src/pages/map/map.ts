import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  lat:number;
  lng:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lat = 51.678418;
    this.lng = 7.809007;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

}
