import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RoyalApiProvider } from '../../providers/royal-api/royal-api';
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
  estatesByRegion: Map<string, Estate[]>
  locationName: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public royalApi: RoyalApiProvider) {
    this.regions = new Set<string>();
    this.estatesByRegion = new Map<string, any>();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EstatesPage');
    let selectedLocation = this.navParams.data;
    this.locationName = selectedLocation.name;
    this.royalApi.getLocationsData(selectedLocation.id).subscribe(data => {
      this.estates = data.estates;
      this.estates.forEach(estate => this.regions.add(estate.region));
      this.regions.forEach(region =>
        this.estates.forEach(estate => {
          let estateArray: Estate[];
          if (estate.region == region) {
            estateArray.push({
              address: estate.address,
              area: estate.area,
              bedrooms: estate.bedrooms,
              id: estate.id,
              image: estate.image,
              latitude: estate.latitude,
              longitude: estate.longitude,
              price: estate.price,
              refNumber: estate.refNumber,
              region: estate.region,
              type: estate.type,
            })
            this.estatesByRegion[region] = estateArray;
          }
        }))
    });
  }
}
