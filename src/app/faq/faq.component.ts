import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})

export class FaqComponent {
  faqs = [
  {
    question: 'Como funciona a terapia individual?',
    answer:
      'A terapia individual é um espaço seguro e confidencial criado para que você possa falar livremente sobre seus pensamentos, sentimentos, desafios e conquistas. Através da escuta ativa e acolhedora, e utilizando a abordagem fenomenológica, eu te ajudo a explorar suas questões internas, compreender melhor suas emoções e construir novas perspectivas para o seu desenvolvimento pessoal e bem-estar. É um processo colaborativo, onde juntos vamos trilhar o caminho do autoconhecimento.',
  },
  {
    question: 'Qual a duração e frequência das sessões?',
    answer:
      'As sessões de terapia individual geralmente têm duração de 50 minutos e acontecem uma vez por semana. Essa frequência é ideal para garantir a continuidade do processo terapêutico e permitir um acompanhamento consistente do seu desenvolvimento. A necessidade de alteração na frequência pode ser conversada e ajustada conforme a evolução de cada caso.',
  },
  {
    question: 'Atende online ou presencialmente?',
    answer:
      'Meu atendimento é exclusivamente online, o que oferece praticidade e flexibilidade para você. Assim, é possível realizar as sessões de onde você estiver, com conforto e segurança, seja em casa, no trabalho ou em viagens. Ofereço atendimento online para todo o Brasil.',
  },
  {
    question: 'Qual o investimento nas sessões?',
    answer:
      'Para informações sobre o investimento nas sessões, por favor, entre em contato. Terei prazer em conversar com você e explicar os detalhes.',
  },
  {
    question: 'Preciso ter um problema grave para procurar terapia?',
    answer:
      'De forma alguma! A terapia é um recurso valioso para qualquer pessoa que busca autoconhecimento, desenvolvimento pessoal e bem-estar emocional. Você não precisa enfrentar um "problema grave" para procurar apoio psicológico. A terapia pode te ajudar a lidar com o estresse do dia a dia, melhorar relacionamentos, aumentar a autoestima, tomar decisões importantes, ou simplesmente aprofundar a compreensão sobre si mesmo. É um investimento em sua saúde mental e qualidade de vida.',
  },
];

  activeIndex: number | null = null;

  toggleAccordion(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
