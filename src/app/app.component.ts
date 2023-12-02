import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponentComponent } from './components/contador-component/contador-component.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';
import { ControleAcessoComponent } from './components/controle-acesso/controle-acesso.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContadorComponentComponent, ListItemsComponent, FormCadastroComponent, ControleAcessoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'avaliacao-pratica-angular';
}
