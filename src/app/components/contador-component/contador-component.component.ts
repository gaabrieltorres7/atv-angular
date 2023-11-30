import { Component } from '@angular/core';

@Component({
  selector: 'app-contador-component',
  standalone: true,
  imports: [],
  templateUrl: './contador-component.component.html',
  styleUrl: './contador-component.component.css'
})
export class ContadorComponentComponent {

  valor: number = 0;

  incrementar() {
    this.valor++;
  }

  decrementar() {
    if (this.valor > 0) {
      this.valor--;
    }
  }

}
