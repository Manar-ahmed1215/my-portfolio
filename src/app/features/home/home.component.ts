import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isDarkMode = input<boolean>(true);

  bgClass = computed(() => this.isDarkMode() ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900');

  subTextClass = computed(() => this.isDarkMode() ? 'text-slate-400' : 'text-slate-600');

  badgeClass = computed(() => 
    this.isDarkMode() 
      ? 'bg-slate-900/90 border-slate-800 text-slate-300' 
      : 'bg-white/90 border-slate-200 text-slate-700 shadow-sm'
  );

  imageCardClass = computed(() => 
    this.isDarkMode() ? 'bg-slate-900 border-slate-950' : 'bg-white border-slate-100'
  );
}
