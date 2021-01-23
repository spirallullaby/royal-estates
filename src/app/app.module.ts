import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyEstatesPage, LocationsPage, EstateHomePage, EstatesPage } from '../pages/pages';
import { RoyalApiProvider } from '../providers/royal-api/royal-api';
import { HttpClientModule } from '@angular/common/http';
import { OverviewPage } from '../pages/overview/overview';
import { SimilarPage } from '../pages/similar/similar';
import { MapPage } from '../pages/map/map';

import { AgmCoreModule } from '@agm/core';
import { NgPipesModule } from 'ngx-pipes';
import { MyEstatesProvider } from '../providers/my-estates/my-estates-settings';

@NgModule({
  declarations: [
    MyApp,
    MyEstatesPage,
    LocationsPage,
    EstateHomePage,
    EstatesPage,
    OverviewPage,
    MapPage,
    SimilarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AgmCoreModule.forRoot({
      //add API KEY manually
      apiKey: ''
    }),
    NgPipesModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyEstatesPage,
    LocationsPage,
    EstateHomePage,
    EstatesPage,
    OverviewPage,
    MapPage,
    SimilarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: IonicErrorHandler, useClass: IonicErrorHandler },
    RoyalApiProvider,
    MyEstatesProvider
  ]
})
export class AppModule { }
