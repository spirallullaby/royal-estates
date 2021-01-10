import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoyalApiProvider } from '../../providers/royal-api/royal-api';
import { EstateHomePage } from '../estate-home/estate-home';
/**
 * Generated class for the EstatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estates',
  templateUrl: 'estates.html',
})

export class EstatesPage {
  estates: any[];
  locationName: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public royalApi: RoyalApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstatesPage');
    let selectedLocation = this.navParams.data;
    this.locationName = selectedLocation.name;
    this.royalApi.getLocationsData(selectedLocation.id)
      .subscribe(data => {
        this.estates = data.estates;
      });
  }

  goToEstateHome(estate: any) {
    estate["locationId"] = this.navParams.data.id;
    this.navCtrl.push(EstateHomePage, estate);
  }
}
