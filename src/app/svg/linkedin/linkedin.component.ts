import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'svg-linkedin',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './linkedin.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkedinComponent {

}
