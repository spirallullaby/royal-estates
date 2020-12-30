import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoyalApiProvider } from '../../providers/royal-api/royal-api';
import { EstatesPage } from '../estates/estates';

/**
 * Generated class for the LocationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html',
})
export class LocationsPage {
  locations: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public royalApi: RoyalApiProvider,
    public loadingController: LoadingController) {
  }

  itemTapped($event, item) {
    this.navCtrl.push(EstatesPage, item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstateHomePage');
    let loader = this.loadingController.create({
      content: 'Getting estates...',
      spinner: 'dots'
    });

    loader.present().then(() => {
      this.royalApi.getLocations().subscribe(
        locations => {
          this.locations = locations;
          loader.dismiss();
        });
    });
  }

}
