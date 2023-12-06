import { Component } from '@angular/core';
import { ComponenteFilhoComponent } from '../componente-filho/componente-filho.component';

@Component({
  selector: 'app-componente-pai',
  standalone: true,
  templateUrl: './componente-pai.component.html',
  styleUrls: ['./componente-pai.component.scss'],
  imports: [ComponenteFilhoComponent],
})
export class ComponentePaiComponent {
  // products: string[] = [];
  // listaDeProdutos = [
  //   { nome: 'Carne', preco: 26.00 },
  //   { nome: 'Cama', preco: 200.00 },
  //   { nome: 'Fogão', preco: 400.00 },
  //   { nome: 'guarda-roupa', preco: 6000.00 },
  //   { nome: 'Geladeira', preco: 1000.00 },
  //   { nome: 'Notebook', preco: 3000.00 }
  // ];

  dadosParaFilho = [
    {
      id: 1,
      name: 'Smartwatch XYZ',
      listPrice: 350,
      salePrice: 299,
      image: 'https://exemplo.com/imagem1.jpg',
    },
    {
      id: 2,
      name: 'Câmera Fotográfica ABC',
      listPrice: 1200,
      salePrice: 999,
      image: 'https://exemplo.com/imagem2.jpg',
    },
    {
      id: 3,
      name: 'Fones de Ouvido QRS',
      listPrice: 80,
      salePrice: 69,
      image: 'https://exemplo.com/imagem3.jpg',
    },
    {
      id: 4,
      name: 'Console de Jogos XYZ',
      listPrice: 500,
      salePrice: 449,
      image: 'https://exemplo.com/imagem4.jpg',
    },
    {
      id: 5,
      name: 'Tablet ABC',
      listPrice: 300,
      salePrice: 249,
      image: 'https://exemplo.com/imagem5.jpg',
    },
  ];
}
