import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponentComponent } from './components/contador-component/contador-component.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';
import { ControleAcessoComponent } from './components/controle-acesso/controle-acesso.component';
import { DadosAlunosComponent } from './components/dados-alunos/dados-alunos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { AreaLogadaComponent } from './components/area-logada/area-logada.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContadorComponentComponent, ListItemsComponent, FormCadastroComponent, ControleAcessoComponent, DadosAlunosComponent, HttpClientModule, FormLoginComponent, AreaLogadaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'avaliacao-pratica-angular';
}
