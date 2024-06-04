import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { GithubComponent } from '../svg/github/github.component';
import { TwitterComponent } from '../svg/twitter/twitter.component';
import { LinkedinComponent } from '../svg/linkedin/linkedin.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, LinkedinComponent, GithubComponent, TwitterComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  linkLinkedIn = 'https://www.linkedin.com/in/marcelo-carro-pacheco/';
  linkGithub = 'https://github.com/macarrp';

}
