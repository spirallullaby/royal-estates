import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from '../map/map';
import { OverviewPage } from '../overview/overview';
import { SimilarPage } from '../similar/similar';

/**
 * Generated class for the EstateHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estate-home',
  templateUrl: 'estate-home.html',
})
export class EstateHomePage {
  overviewTab: any;
  mapTab: any;
  similarTab: any;
  estate: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.estate = this.navParams.data;
    this.mapTab = MapPage;
    this.overviewTab = OverviewPage;
    this.similarTab = SimilarPage;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EstateHomePage');
  }

  goHome() {
    this.navCtrl.popToRoot();
  }

}
