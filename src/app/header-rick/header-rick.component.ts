import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FavoritoService } from '../conteudo-rick/service/favoritos-service/favorito.service';

@Component({
  selector: 'app-header-rick',
  templateUrl: './header-rick.component.html',
  styleUrls: ['./header-rick.component.css']
})
export class HeaderRickComponent implements OnInit {
  srcImagem: string = '../assets/pequeno-img-rick.png';
  favoritesCount: number = 0;
  isHomeActive: boolean = true;

  constructor(
    private router: Router,
    private favoritoService: FavoritoService
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isHomeActive = event.urlAfterRedirects.includes('/home');
      }
    });
  }

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
    this.router.navigate(['/home']);
  }

  enviaFavorito(): void {
    this.router.navigate(['/favoritos']);
  }
}
