import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Events } from 'ionic-angular';

import { MyEstatesPage } from '../pages/my-estates/my-estates';
import { LocationsPage } from '../pages/locations/locations';
import { EstateHomePage } from '../pages/estate-home/estate-home';
import { MyEstatesProvider } from '../providers/my-estates/my-estates';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { RoyalApiProvider } from '../providers/royal-api/royal-api';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MyEstatesPage;

  pages: Array<{ title: string, component: any }>;

  favouriteEstates: any[];
  constructor(public platform: Platform,
     public statusBar: StatusBar,
     public splashScreen: SplashScreen,
     public myEstatesProvider: MyEstatesProvider,     
     public loadingController: LoadingController,
     public royalApi: RoyalApiProvider,
     public events: Events) {
     this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.refreshFavorites();
      this.events.subscribe('favorites:changed', () => this.refreshFavorites());
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  getLocations() {
    this.nav.push(LocationsPage);
  }

  getSavedEstates() {
    this.nav.push(EstateHomePage);
  }

  refreshFavorites() {
    this.myEstatesProvider.getAllFavorites().then(favs => this.favouriteEstates = favs);
  }

  goToEstate(favorite) {
    let loader = this.loadingController.create({
      content: 'Getting data...',
      dismissOnPageChange: true
    });
    loader.present();
    this.royalApi.getLocationsData(favorite.Id).subscribe(l => this.nav.push(EstateHomePage, favorite));
  }
}
