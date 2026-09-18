import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  isDarkMode = input<boolean>(true);

  courseworkList: string[] = [
    'Data Structures & Algorithms',
    'Software Engineering',
    'Object-Oriented Programming (OOP)',
    'Database Management Systems (SQL)',
    'Machine Learning & Neural Networks',
    'Web Development Fundamentals'
  ];

  bgClass = computed(() => this.isDarkMode() ? 'bg-slate-950 text-slate-100 border-slate-800/80' : 'bg-slate-50 text-slate-900 border-slate-200');
  textTitle = computed(() => this.isDarkMode() ? 'text-white' : 'text-slate-900');
  textMuted = computed(() => this.isDarkMode() ? 'text-slate-400' : 'text-slate-600');
  
  cardClass = computed(() => 
    this.isDarkMode() 
      ? 'bg-slate-900/90 border-slate-800 text-slate-100 shadow-2xl backdrop-blur-md hover:border-indigo-500/50' 
      : 'bg-white border-slate-200 text-slate-800 shadow-xl hover:border-indigo-500/50'
  );

  subCardClass = computed(() => 
    this.isDarkMode() 
      ? 'bg-slate-950/80 border-slate-800 hover:border-indigo-500/40' 
      : 'bg-slate-100/70 border-slate-200 hover:border-indigo-500/40'
  );

  badgeClass = computed(() => 
    this.isDarkMode() 
      ? 'bg-slate-800 border-slate-700 text-slate-200 hover:border-indigo-500 hover:text-indigo-400' 
      : 'bg-slate-100 border-slate-300 text-slate-700 hover:border-indigo-500 hover:text-indigo-600'
  );
}