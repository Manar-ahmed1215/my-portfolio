import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  isDarkMode = input<boolean>(true);

  bgClass = computed(() => this.isDarkMode() ? 'bg-slate-950 text-white' : 'bg-white text-slate-900');
  titleClass = computed(() => this.isDarkMode() ? 'text-white' : 'text-slate-900');
  textMuted = computed(() => this.isDarkMode() ? 'text-slate-400' : 'text-slate-600');
  cardClass = computed(() => this.isDarkMode() ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-lg');
  openGmail() {
    const email = 'mmony4544@gmail.com';
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(url, '_blank');
  }
}
