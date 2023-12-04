import { Component } from '@angular/core';
import { ComponenteFilhoComponent } from "../componente-filho/componente-filho.component";


@Component({
    selector: 'app-componente-pai',
    standalone: true,
    templateUrl: './componente-pai.component.html',
    styleUrls: ['./componente-pai.component.scss'],
    imports: [ComponenteFilhoComponent]
})
export class ComponentePaiComponent {
  listaDeProdutos = [
    { nome: 'Carne', preco: 26.00 },
    { nome: 'Cama', preco: 200.00 },
    { nome: 'Fogão', preco: 400.00 },
    { nome: 'guarda-roupa', preco: 6000.00 },
    { nome: 'Geladeira', preco: 1000.00 },
    { nome: 'Notebook', preco: 3000.00 }
  ];

  }
