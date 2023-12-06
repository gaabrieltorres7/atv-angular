import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-area-logada',
  templateUrl: './area-logada.component.html',
  styleUrls: ['./area-logada.component.css'],
  standalone: true,
})
export class AreaLogadaComponent {
  @Input() email: string = '';
  @Input() senha: string = '';
}
