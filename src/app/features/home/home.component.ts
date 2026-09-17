import { CommonModule } from '@angular/common';
import { Component, computed, input, signal, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
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

  // منطق أنيميشن كتابة ومسح النص (Typewriter Effect)
  titles: string[] = [
    'Frontend Developer (Angular)',
    'Angular & RxJS Specialist',
    'Software Engineering Trainee'
  ];

  currentText = signal<string>('');
  private textIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId: any;

  ngOnInit(): void {
    this.typeEffect();
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private typeEffect(): void {
    const currentTitle = this.titles[this.textIndex];

    if (this.isDeleting) {
      this.currentText.set(currentTitle.substring(0, this.charIndex - 1));
      this.charIndex--;
    } else {
      this.currentText.set(currentTitle.substring(0, this.charIndex + 1));
      this.charIndex++;
    }

    let speed = this.isDeleting ? 40 : 80;

    if (!this.isDeleting && this.charIndex === currentTitle.length) {
      speed = 2000; // وقت الانتظار عند اكتمال كتابة الجملة
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.titles.length;
      speed = 400;
    }

    this.timeoutId = setTimeout(() => this.typeEffect(), speed);
  }
}