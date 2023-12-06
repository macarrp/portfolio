import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'svg-twitter',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './twitter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwitterComponent {

}
