import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstateHomePage } from '../estate-home/estate-home';
import { LocationsPage } from '../locations/locations';

/**
 * Generated class for the MyEstatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-estates',
  templateUrl: 'my-estates.html',
})
export class MyEstatesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyEstatesPage');
  }

  getLocations() {
    this.navCtrl.push(LocationsPage); 
  }

  getSavedeStates(){
    this.navCtrl.push(EstateHomePage); 
  }
}
