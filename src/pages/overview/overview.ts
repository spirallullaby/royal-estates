import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyEstatesProvider } from '../../providers/my-estates/my-estates';

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
  isFavourite: boolean;
  bookmarkText: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public myEstatesProvider: MyEstatesProvider) {
    this.estate = this.navParams.get('estate');
  }

  ionViewDidLoad() {
    this.myEstatesProvider.isFavoriteEstate(this.estate.id)
      .then(value => this.isFavourite = value);

  }

  setBookmarkText() {
    if (this.isFavourite) {
      this.bookmarkText = "Unfollow estate";
    }
    else {
      this.bookmarkText = "Save to my estates";
    }
  }

  bookmarkClicked(){
    if(this.isFavourite){
      this.myEstatesProvider.unfavoriteEstate(this.estate);
    }
    else{
      this.myEstatesProvider.favoriteEstate(this.estate);
    }
  }
  
  doRefresh(event) {
    console.log('Begin operation.');
    this.estate = this.navParams.get('estate');
    event.complete();
    console.log('Operation completed.');
  }
}
