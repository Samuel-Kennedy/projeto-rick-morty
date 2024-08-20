import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RequisicaoRickService } from '../service/requisicao-rick.service';

@Component({
  selector: 'app-inicio-rick',
  templateUrl: './inicio-rick.component.html',
  styleUrls: ['./inicio-rick.component.css']
})
export class InicioRickComponent implements OnInit {
  srcImagem: string = '../assets/inicio-img-rick.png';
  dataSource = new MatTableDataSource<{ url: string, nome: string, tipo: string, extraTipo: string }>();
  filteredData: { url: string, nome: string, tipo: string, extraTipo: string }[] = []; // Nova propriedade para armazenar os dados filtrados
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  searchText: string = ''; // Adiciona a variável searchText para armazenar o texto de pesquisa

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
          extraTipo: character.type
        }));
        this.filteredData = this.dataSource.data; // Inicialmente, filtrada é igual a todos os dados
        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
        }
      },
      error: () => {
        // Tratamento de erro
      }
    });
  }

  onSearch(): void {
    const filterValue = this.searchText.trim().toLowerCase();
    this.filteredData = this.dataSource.data.filter(item => item.nome.toLowerCase().includes(filterValue));
    console.log(this.filteredData); // Para ver os dados filtrados
  }
}
