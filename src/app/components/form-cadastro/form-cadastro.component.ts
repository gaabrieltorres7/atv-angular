import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-cadastro.component.html',
  styleUrl: './form-cadastro.component.css'
})
export class FormCadastroComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  mensagem: string = '';
  cores: string = '';

  cadastrar(): void {
    if (this.nome && this.email && this.senha) {
      this.mensagem = `Olá, ${this.nome}, seu cadastro foi realizado com sucesso.`;
      this.cores ='verde'
    } else {
      this.mensagem = 'Olá, informe os campos corretamente.';
      this.cores = 'vermelho';
    }
  }
}
