import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ItemsRick } from '../../models/itemsRick';
import { RequisicaoRickService } from '../service/requisicao-rick-service/requisicao-rick.service';
import { FavoritoService } from '../service/favoritos-service/favorito.service';

@Component({
  selector: 'app-inicio-rick',
  templateUrl: './inicio-rick.component.html',
  styleUrls: ['./inicio-rick.component.css']
})

export class InicioRickComponent implements OnInit {
  srcImagem: string = '../assets/inicio-img-rick.png';
  dataSource = new MatTableDataSource<ItemsRick>();
  filteredData: ItemsRick[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  searchText: string = '';
  seachValidador: boolean = true;

  constructor(
    private requisicaoRickService: RequisicaoRickService,
    private favoritoService: FavoritoService
  ) {}

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.requisicaoRickService.getCharacters().subscribe({
      next: (data) => {
        this.dataSource.data = data.results.map((character: any) => ({
          url: character.image,
          nome: character.name,
          tipo: character.species,
          extraTipo: character.type,
          favorito: false
        }));
        this.filteredData = [...this.dataSource.data];
        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
        }
      },
      error: () => {
        // Tratamento de erro
      }
    });
  }

  toggleFavorito(item: ItemsRick): void {
    if (item.favorito) {
      console.log(`Removing favorite: ${item.nome}`);
      this.favoritoService.removeFavorite(item);
    } else {
      console.log(`Adding favorite: ${item.nome}`);
      this.favoritoService.addFavorite(item);
    }
    item.favorito = !item.favorito;
  }

  onSearch(): void {
    const filterValue = this.searchText.trim().toLowerCase();
    this.filteredData = this.dataSource.data.filter(item => 
      item.nome?.toLowerCase().includes(filterValue)
    );
    this.seachValidador = this.filteredData.length > 0;
  }
}
