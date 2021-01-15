import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

@Injectable()
export class MyEstatesProvider {

  constructor(public http: HttpClient, public storage: Storage, public events: Events) {
    console.log('Hello MyEstatesProvider Provider');
  }

  favoriteEstate(estate) {
    this.storage.set(estate.id.toString(), JSON.stringify(estate)).then(() => {
      this.events.publish('favorites:changed');
    });
  }

  unfavoriteEstate(estate) {
    this.storage.remove(estate.id.toString());
    this.events.publish('favorites:changed');
  }

  isFavoriteEstate(estateId): Promise<boolean> {
    return this.storage.get(estateId.toString()).then(value => value ? true : false);
  }

  getAllFavorites(): Promise<any[]> {
    return new Promise(resolve => {
      let results = [];
      this.storage.forEach(data => {
        results.push(JSON.parse(data));
      });
      return resolve(results);
    });
  }
}
