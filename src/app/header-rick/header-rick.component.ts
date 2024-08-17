import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-rick',
  templateUrl: './header-rick.component.html',
  styleUrls: ['./header-rick.component.css']
})

export class HeaderRickComponent implements OnInit {
  srcImagem: string = '../assets/pequeno-img-rick.png';

  constructor(){}

  ngOnInit(): void {
    
  }
}
