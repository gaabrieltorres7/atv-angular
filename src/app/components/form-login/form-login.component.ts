import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AreaLogadaComponent } from "../area-logada/area-logada.component";

@Component({
    selector: 'app-form-login',
    standalone: true,
    templateUrl: './form-login.component.html',
    styleUrls: ['./form-login.component.css'],
    imports: [CommonModule, FormsModule, AreaLogadaComponent]
})
export class FormLoginComponent {
  email: string = '';
  senha: string = '';
  mostrarMensagem: boolean = true;
  camposPreenchidos: boolean = false;

  fazerLogin() {
    if (this.email.trim() === '' || this.senha.trim() === '') {
      this.mostrarMensagem = true;
      this.camposPreenchidos = false;
    } else {
      this.mostrarMensagem = false;
      this.camposPreenchidos = true;
    }
  }
}
