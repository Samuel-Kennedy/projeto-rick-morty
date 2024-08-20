import { Component, OnInit } from '@angular/core';
import { FavoritoService } from '../service/favoritos-service/favorito.service';
import { ItemsRick } from '../../models/itemsRick';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  favoritosList: ItemsRick[] = [];

  constructor(private favoritoService: FavoritoService) {}

  ngOnInit(): void {
    this.favoritoService.favorites$.subscribe(favorites => {
      this.favoritosList = favorites;
    });
  }

  toggleFavorito(item: ItemsRick): void {
    this.favoritoService.removeFavorite(item);
  }
}
