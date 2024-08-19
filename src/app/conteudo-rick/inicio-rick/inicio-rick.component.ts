import { Component, OnInit } from '@angular/core';
import { RequisicaoRickService } from '../service/requisicao-rick.service';

@Component({
  selector: 'app-inicio-rick',
  templateUrl: './inicio-rick.component.html',
  styleUrls: ['./inicio-rick.component.css']
})

export class InicioRickComponent implements OnInit {

  srcImagem: string = '../assets/inicio-img-rick.png';
  srcImagemGeral: any;
  constructor(
    private requisicaoRickService: RequisicaoRickService
  ){}

  ngOnInit(): void {
    this.requisicaoRickService.getCharacters().subscribe({
      next: (data) => {
        console.log(data);
        this.srcImagemGeral = data.results.map((character: any) => character.image);
        console.log(this.srcImagemGeral);
      }
    })
  }

}
