import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  isDarkMode = input<boolean>(true);

  bgClass = computed(() => this.isDarkMode() ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900');
  textMuted = computed(() => this.isDarkMode() ? 'text-slate-400' : 'text-slate-600');
  
  editorBg = computed(() => this.isDarkMode() ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-900 text-slate-200 border-slate-950');
  editorHeader = computed(() => this.isDarkMode() ? 'bg-slate-900 border-slate-800' : 'bg-slate-950');

  cardClass = computed(() => 
    this.isDarkMode() ? 'bg-slate-900/50 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-sm'
  );

  statCardClass = computed(() => 
    this.isDarkMode() 
      ? 'bg-slate-900/40 border-slate-800/80 hover:border-indigo-500/50' 
      : 'bg-white border-slate-200 text-slate-800 hover:border-indigo-500 shadow-sm'
  );

  socialIconClass = computed(() => 
    this.isDarkMode() 
      ? 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800' 
      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100 shadow-sm'
  );

  openGmail() {
    const email = 'mmony4544@gmail.com';
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
    window.open(url, '_blank');
  }
}