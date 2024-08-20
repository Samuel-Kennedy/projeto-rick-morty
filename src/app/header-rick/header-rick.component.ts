import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritoService } from '../conteudo-rick/service/favoritos-service/favorito.service';

@Component({
  selector: 'app-header-rick',
  templateUrl: './header-rick.component.html',
  styleUrls: ['./header-rick.component.css']
})
export class HeaderRickComponent implements OnInit {
  srcImagem: string = '../assets/pequeno-img-rick.png';
  favoritesCount: number = 0;

  constructor(
    private router: Router,
    private favoritoService: FavoritoService
  ) {}

  ngOnInit(): void {
    this.updateFavoritesCount();
    this.favoritoService.favorites$.subscribe(() => {
      this.updateFavoritesCount();
    });
  }

  private updateFavoritesCount(): void {
    this.favoritesCount = this.favoritoService.getFavoritesCount();
  }

  enviaHome(): void {
    this.router.navigate(["/home"]);
  }

  enviaFavorito(): void {
    this.router.navigate(["/favoritos"]);
  }
}
