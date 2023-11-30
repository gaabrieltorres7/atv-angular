import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'] // Corrija para usar styleUrls
})
export class FormLoginComponent {
  email: string = '';
  senha: string = '';
  mostrarMensagem: boolean = false;

  fazerLogin() {
    if (this.email.trim() !== '' || this.senha.trim() !== '') {
      // Se algum dos campos estiver vazio, exibe a mensagem
      this.mostrarMensagem = true;
    } else {
      // Lógica para fazer login quando os campos não estão vazios
      this.mostrarMensagem = false;
      // Adicione aqui a lógica para o login real
    }
  }
}
