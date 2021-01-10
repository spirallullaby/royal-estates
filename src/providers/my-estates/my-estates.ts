import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class MyEstatesProvider {

  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello MyEstatesProvider Provider');
  }

  favoriteEstate(estate) {
    this.storage.set(estate.id, JSON.stringify(estate));
  }

  unfavoriteEstate(estate) {
    this.storage.remove(estate.id.toString());
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
