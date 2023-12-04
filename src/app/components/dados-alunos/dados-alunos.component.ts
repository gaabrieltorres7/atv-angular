import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dados-alunos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dados-alunos.component.html',
  styleUrl: './dados-alunos.component.css'
})
export class DadosAlunosComponent implements OnInit {
  alunos: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/alunos')  
      .subscribe(data => {
        this.alunos = data;
      });
  }

  calcularMediaGlobal(rendimento: any): number {
    const disciplinas = Object.values(rendimento) as number[];
    const mediaGlobal = disciplinas.reduce((acc: number, nota: number) => acc + nota, 0);
    return mediaGlobal / disciplinas.length;
  }
}
