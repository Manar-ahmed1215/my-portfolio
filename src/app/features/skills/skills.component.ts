import { CommonModule } from '@angular/common';
import { Component, computed, input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
})
export class SkillsComponent implements AfterViewInit {
  isDarkMode = input<boolean>(true);

  bgClass = computed(() => this.isDarkMode() ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900');
  cardClass = computed(() => this.isDarkMode() 
      ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200');

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.skill-card');
    cards.forEach((card) => observer.observe(card));
  }
}