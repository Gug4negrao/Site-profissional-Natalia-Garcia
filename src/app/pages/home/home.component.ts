import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { HeroComponent } from '../../hero/hero.component';
import { AboutComponent } from '../../about/about.component';
import { ServicesComponent } from '../../services/services.component';
import { FaqComponent } from '../../faq/faq.component';
import { ContactComponent } from '../../contact/contact.component';
import { FooterComponent } from '../../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
    <app-about></app-about>
    <app-services></app-services>
    <app-faq></app-faq>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `,
})
export class HomeComponent {}
