import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyEstatesProvider } from '../../providers/my-estates/my-estates';

/**
 * Generated class for the MyEstatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-estates',
  templateUrl: 'my-estates.html',
})
export class MyEstatesPage {

  mySavedEstates: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public myEstatesProvider: MyEstatesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyEstatesPage');
  }

  ionViewDidEnter() {
    this.myEstatesProvider.getAllFavorites().then(favs => this.mySavedEstates = favs);
  }

}
