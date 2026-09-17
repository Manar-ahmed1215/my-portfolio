import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  isDarkMode = input<boolean>(true);

  bgClass = computed(() => this.isDarkMode() ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900');
  titleClass = computed(() => this.isDarkMode() ? 'text-white' : 'text-slate-900');
  cardClass = computed(() => 
    this.isDarkMode() 
      ? 'bg-slate-900/50 border-slate-800 hover:bg-slate-900' 
      : 'bg-white border-slate-200 hover:bg-slate-50 shadow-sm'
  );
}