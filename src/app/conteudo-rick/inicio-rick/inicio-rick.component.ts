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
  srcImagemGeral: string[] = [];
  dataSource = new MatTableDataSource<string>();
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private requisicaoRickService: RequisicaoRickService) {}

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.requisicaoRickService.getCharacters().subscribe({
      next: (data) => {
        this.srcImagemGeral = data.results.map((character: any) => character.image);
        this.dataSource.data = this.srcImagemGeral;
        this.setupPaginator();
      },
      error: () => {
        // Handle error
      }
    });
  }

  setupPaginator(): void {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
}
