import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-rick',
  templateUrl: './inicio-rick.component.html',
  styleUrls: ['./inicio-rick.component.css']
})

export class InicioRickComponent implements OnInit {

  srcImagem: string = '../assets/inicio-img-rick.png';

  ngOnInit(): void {

  }

}
