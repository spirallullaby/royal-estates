import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
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
    public royalApi: RoyalApiProvider,
    public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstatesPage');
    let loader = this.loadingController.create({
      content: 'Getting estates...',
      spinner: 'dots'
    });

    let selectedLocation = this.navParams.data;
    this.locationName = selectedLocation.name;
    
    this.royalApi.getLocationsData(selectedLocation.id)
      .subscribe(data => {
        this.estates = data.estates;
        
        loader.dismiss();
      });
  }

  goToEstateHome(estate: any) {
    estate["locationId"] = this.navParams.data.id;
    this.navCtrl.push(EstateHomePage, estate);
  }
}
