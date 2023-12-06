import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'svg-github',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './github.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GithubComponent {

}
