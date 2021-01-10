import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import * as _ from "lodash";

import { RoyalApiProvider } from '../../providers/royal-api/royal-api';



/**
 * Generated class for the SimilarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-similar',
  templateUrl: 'similar.html',
})
export class SimilarPage {
  locationsData: any[];
  allEstatesInCity: any[];
  estates: any[];
  selectedEstate: any;
  regions: Set<string>;
  regionFilter = 'region';
  useAdditionalFilter = false;
  selectedEstateType = 'House';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public royalApi: RoyalApiProvider,
    public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimilarPage');
    this.selectedEstate = this.navParams.get('estate');
    let loader = this.loadingController.create({
      content: 'Getting estates...',
      spinner: 'dots'
    });

    loader.present().then(() => {
      this.royalApi.getLocationsData(this.selectedEstate.locationId).subscribe(
        data => {
          this.allEstatesInCity = data.estates;
          this.filterRegion();
          loader.dismiss();
        });
    });
  }

  getEstatesByRegion(region: string) {
    return this.allEstatesInCity.filter(estate => estate.region === region);
  }

  filterRegion() {
    if (this.regionFilter === 'all') {
      this.estates = this.allEstatesInCity.filter(estate => estate.region != '');
    }
    else {
      this.estates = this.allEstatesInCity.filter(estate => estate.region === this.selectedEstate.region);
    }
    if (this.useAdditionalFilter) {
      this.estates = this.estates.filter(estate => estate.type === this.selectedEstateType);
    }
  }
}