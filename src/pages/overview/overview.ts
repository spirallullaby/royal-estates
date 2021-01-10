import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
})
export class OverviewPage {
  estate: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.estate = this.navParams.get('estate');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverviewPage');
  }

  doRefresh(event) {
    console.log('Begin operation.');
    this.estate = this.navParams.get('estate');
    event.complete();
    console.log('Operation completed.');
    }
}
