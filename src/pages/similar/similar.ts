import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

import { RoyalApiProvider } from '../../providers/royal-api/royal-api';
import { EstateHomePage } from '../estate-home/estate-home';


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
    public app: App,
    public royalApi: RoyalApiProvider,
    public loadingController: LoadingController) {
    this.selectedEstate = this.navParams.get('estate');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimilarPage');
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
    //apply main filter
    if (this.regionFilter === 'all') {
      this.estates = this.allEstatesInCity.filter(estate => estate.region != '');
    }
    else {
      this.estates = this.allEstatesInCity.filter(estate => estate.region === this.selectedEstate.region);
    }
    //apply additional filter if turned on
    if (this.useAdditionalFilter) {
      this.estates = this.estates.filter(estate => estate.type === this.selectedEstateType);
    }
    //sort by region
    this.estates = this.estates.sort((a, b) => a.region.localeCompare(b.region))
  }

  getHeader(record, recordIndex, records) {
    if (recordIndex === 0 || record.region !== records[recordIndex - 1].region) {
      return record.region;
    }
    return null;
  }

  goToEstateHome(estate: any) {
    estate["locationId"] = this.selectedEstate.locationId;
    this.app.getRootNav().push(EstateHomePage, estate);
  }
}