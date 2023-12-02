import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-controle-acesso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './controle-acesso.component.html',
  styleUrls: ['./controle-acesso.component.scss']
})
export class ControleAcessoComponent {
  showAdministrador: boolean = true;
  showColaborador: boolean = true;
  showUsuario: boolean = true;

  showMessage: string = '';

  showAdminMessage(): void {
    this.showAdministrador = true;
    this.showColaborador = false;
    this.showUsuario = false;
    this.showMessage = 'Administrador';
  }

  showColabMessage(): void {
    this.showAdministrador = false;
    this.showColaborador = true;
    this.showUsuario = false;
    this.showMessage = 'Colaborador';
  }

  showUserMessage(): void {
    this.showAdministrador = false;
    this.showColaborador = false;
    this.showUsuario = true;
    this.showMessage = 'Usuário';
  }
}
