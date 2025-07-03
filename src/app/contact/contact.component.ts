import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html'
})

export class ContactComponent {
   email = 'entendendosuamentepsi@gmail.com';
   formData = {
    nome: '',
    email: '',
    mensagem: ''
  };

  sendWhatsapp() {
    console.log("oxe");
    const { nome, email, mensagem } = this.formData;

    const texto = `
    Olá, estou enviando essa mensagem pelo seu site:

    *Nome:* ${nome}
    *E-mail:* ${email}
    *Mensagem:* ${mensagem}
    `;

    const numero = '5531998748837';
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(texto)}&type=phone_number&app_absent=0`;
    window.open(url, '_blank');
  }
}