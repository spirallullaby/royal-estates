import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  estate: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.estate = this.navParams.get('estate');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EstateHomePage');
  }

  goHome() {
    this.navCtrl.popToRoot();
  }

}
