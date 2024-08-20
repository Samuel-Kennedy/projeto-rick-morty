import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RequisicaoRickService } from '../service/requisicao-rick.service';
import { ItemsRick } from '../../models/itemsRick'

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

  constructor(private requisicaoRickService: RequisicaoRickService) {}

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
