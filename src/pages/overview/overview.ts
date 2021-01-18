import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { MyEstatesProvider } from '../../providers/my-estates/my-estates-settings';

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
    public myEstatesProvider: MyEstatesProvider,
    public toastController: ToastController,
    public alertController: AlertController) {
    this.estate = this.navParams.get('estate');
  }

  ionViewDidLoad() {    
    this.myEstatesProvider.isFavoriteEstate(this.estate.id)
      .then(value => this.isFavourite = value);
  }

  bookmarkClicked() {
    if (this.isFavourite) {
      let confirm = this.alertController.create({
        title: "Unfollow?",
        message: "Are you sure you want to remove from saved estates?",
        buttons: [
          {
            text: "Yes",
            handler: () => {
              this.isFavourite = false;
              this.myEstatesProvider.unfavoriteEstate(this.estate);
              let toast = this.toastController.create({
                message: "You have unfollowed this estate!",
                duration: 2000,
                position: "bottom"
              });
              toast.present();
            }
          },
          {
            text: "No"
          }
        ]
      });
      confirm.present();
    } else {
      this.isFavourite = true;
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
