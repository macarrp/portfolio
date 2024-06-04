import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GithubComponent } from '../svg/github/github.component';
import { TwitterComponent } from '../svg/twitter/twitter.component';
import { LinkedinComponent } from '../svg/linkedin/linkedin.component';
import { EmailComponent } from "../svg/email/email.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule, LinkedinComponent, GithubComponent, TwitterComponent,
        EmailComponent
    ]
})
export class HeaderComponent {

  linkLinkedIn = 'https://www.linkedin.com/in/marcelo-carro-pacheco/';
  linkGithub = 'https://github.com/macarrp';
  linkEmail = 'mailto:marcelocp.dev@gmail.com?Subject=Contacto%20Porfolio'
}
