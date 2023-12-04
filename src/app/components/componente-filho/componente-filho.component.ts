import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente-filho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.scss']
})


export class ComponenteFilhoComponent {
  @Input()
  listaDeProdutos!: any[];
  
  }