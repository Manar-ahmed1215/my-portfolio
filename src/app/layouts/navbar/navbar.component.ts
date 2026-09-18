import { CommonModule } from '@angular/common';
import { Component, signal, AfterViewInit, OnDestroy, input, output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  isDarkMode = input<boolean>(true);
  toggleDarkModeEmit = output<void>({ alias: 'toggleDarkMode' });

  activeSection = signal<string>('home');
  isMenuOpen = signal<boolean>(false);
  private observer: IntersectionObserver | undefined;

  ngAfterViewInit() {
    // خط الرؤية المستهدف في شاشة المستخدم (شريط بعرض 10% في منتصف الشاشة تقريباً)
    const options = { 
      root: null, 
      rootMargin: '-20% 0px -60% 0px', 
      threshold: 0 
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection.set(entry.target.id);
        }
      });
    }, options);

    const sections = ['home', 'about', 'skills', 'projects', 'education', 'experience', 'contact'];
    
    // تأخير بسيط للتأكد من انقضاء الـ Rendering كاملاً للسكاشن في الـ DOM
    setTimeout(() => {
      sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) this.observer?.observe(element);
      });
    }, 100);
  }

  ngOnDestroy() { 
    this.observer?.disconnect(); 
  }

  toggleDarkMode() { 
    this.toggleDarkModeEmit.emit(); 
  }
  
  toggleMenu() {
    this.isMenuOpen.update(value => !value);
  }
}