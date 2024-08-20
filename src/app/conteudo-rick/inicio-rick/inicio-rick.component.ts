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
  dataSource = new MatTableDataSource<{ url: string, nome: string, tipo: string,  extraTipo: string}>();
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private requisicaoRickService: RequisicaoRickService) {}

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.requisicaoRickService.getCharacters().subscribe({
      next: (data) => {
        console.log(data)
        this.dataSource.data = data.results.map((character: any) => ({
          url: character.image,
          nome: character.name,
          tipo: character.species,
          extraTipo: character.type
        }));
        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
        }
      },
      error: () => {
        // Tratamento aqui
      }
    });
  }
}
