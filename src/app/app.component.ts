import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { AreaCoveredComponent } from './area-covered/area-covered.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    FooterComponent,
    CommonModule,
    ContactComponent,
    AreaCoveredComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activePage: string = 'home';

  handleNavigation(page: string) {
    this.activePage = page;
  }
}
