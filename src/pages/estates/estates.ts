import { analyzeAndValidateNgModules } from '@angular/compiler';
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
  regions: Set<string>;
  locationName: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public royalApi: RoyalApiProvider) {
    this.regions = new Set<string>();
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad EstatesPage');
      let selectedLocation = this.navParams.data;
      this.locationName = selectedLocation.name;
      this.royalApi.getLocationsData(selectedLocation.id).subscribe(data => {
      this.estates = data.estates;
      this.regions = new Set<string>(this.estates.map<string>(m => m.region));
    });
  }

  getEstatesByRegion(region: string) {
    return this.estates.filter(estate => estate.region === region);
  }

  goToEstateHome(id: string){
    this.navCtrl.push(EstateHomePage, id);
  }
}
