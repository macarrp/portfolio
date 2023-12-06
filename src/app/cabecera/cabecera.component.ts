import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CabeceraComponent implements OnInit {

  ngOnInit(): void { }

}
