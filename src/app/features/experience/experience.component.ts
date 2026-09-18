import { Component, computed, input, AfterViewInit, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements AfterViewInit {
  private el = inject(ElementRef);

  isDarkMode = input<boolean>(true);

  bgClass = computed(() => this.isDarkMode() ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900');
  titleClass = computed(() => this.isDarkMode() ? 'text-white' : 'text-slate-900');
  textMuted = computed(() => this.isDarkMode() ? 'text-slate-400' : 'text-slate-600');
  cardClass = computed(() => 
    this.isDarkMode() 
      ? 'bg-slate-900/50 border-slate-800 hover:bg-slate-900' 
      : 'bg-white border-slate-200 hover:bg-slate-50 shadow-sm'
  );

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      { threshold: 0.15 }
    );

    const animatedElements = this.el.nativeElement.querySelectorAll('.reveal');
    animatedElements.forEach((element: HTMLElement) => observer.observe(element));
  }
}