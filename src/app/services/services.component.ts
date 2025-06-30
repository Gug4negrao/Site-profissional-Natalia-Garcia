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
      description: 'Sessões personalizadas para trabalhar questões específicas como ansiedade, depressão, autoestima e relacionamentos.',
      icon: '🗣️',
      features: [
        'Sessões de 50 minutos',
        'Ambiente confidencial',
        'Abordagem personalizada',
        'Acompanhamento contínuo'
      ]
    },
    {
      title: 'Avaliação Psicológica',
      description: 'Processo estruturado para compreender aspectos da personalidade e funcionamento psicológico.',
      icon: '📋',
      features: [
        'Instrumentos validados',
        'Relatório detalhado',
        'Orientações específicas',
        'Devolutiva completa'
      ]
    },
    {
      title: 'Orientação Familiar',
      description: 'Suporte para famílias que buscam melhorar a comunicação e resolver conflitos.',
      icon: '👨‍👩‍👧‍👦',
      features: [
        'Dinâmicas familiares',
        'Mediação de conflitos',
        'Estratégias de comunicação',
        'Fortalecimento de vínculos'
      ]
    }
  ];

  scrollToContact(): void {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
