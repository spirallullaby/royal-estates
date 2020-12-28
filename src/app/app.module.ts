import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyEstatesPage, LocationsPage, EstateHomePage,EstatesPage} from '../pages/pages';
import { RoyalApiProvider } from '../providers/royal-api/royal-api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    MyEstatesPage,
    LocationsPage,
    EstateHomePage,
    EstatesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),    
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyEstatesPage,
    LocationsPage,
    EstateHomePage,
    EstatesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: IonicErrorHandler, useClass: IonicErrorHandler},
    RoyalApiProvider
  ]
})
export class AppModule {}
