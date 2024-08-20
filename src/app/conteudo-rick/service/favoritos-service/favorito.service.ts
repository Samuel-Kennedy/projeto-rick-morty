import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItemsRick } from '../../../models/itemsRick';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  private favoritesSubject = new BehaviorSubject<ItemsRick[]>([]);
  favorites$ = this.favoritesSubject.asObservable();

  addFavorite(item: ItemsRick): void {
    const currentFavorites = this.favoritesSubject.value;
    if (!currentFavorites.find(fav => fav === item)) {
      this.favoritesSubject.next([...currentFavorites, item]);
    }
  }

  removeFavorite(item: ItemsRick): void {
    const currentFavorites = this.favoritesSubject.value;
    this.favoritesSubject.next(currentFavorites.filter(fav => fav !== item));
  }

  getFavoritesCount(): number {
    return this.favoritesSubject.value.length;
  }
}
