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
  
  const options = { 
    root: null, 
    rootMargin: '-10% 0px -10% 0px',
    threshold: 0.1 
  };

  this.observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.activeSection.set(entry.target.id);
      }
    });
  }, options);

  ['home', 'about', 'skills', 'projects', 'experience', 'contact'].forEach(id => {
    const element = document.getElementById(id);
    if (element) this.observer?.observe(element);
  });
}

  ngOnDestroy() { this.observer?.disconnect(); }

  toggleDarkMode() { 
    this.toggleDarkModeEmit.emit(); 
  }
  toggleMenu() {
  this.isMenuOpen.update(value => !value);
}
}