import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html'
})
export class ServicesComponent {
  services = [
    {
      title: 'Terapia Individual',
      description: 'Sessões semanais para conversarmos sobre o que quiser. Será o seu espaço para explorar conquistas, receios, celebrações, medos, angústias e tudo aquilo que acredita que seja importante para o seu desenvolvimento pessoal. Juntos, vamos construir novos olhares e caminhos para o seu bem-estar.',
      icon: 'fas fa-user',
      features: [
        'Sessões de 50 minutos',
        'Modalidade Online'
      ]
    },
  ];

  scrollToContact(): void {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
