import { Component, signal, computed, input, AfterViewInit, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../core/models/project.interface';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit {
  private el = inject(ElementRef);

  isDarkMode = input<boolean>(true);
  projects = signal<Project[]>([
    { title: 'FreshCart E-Commerce', desc: 'Complete e-commerce platform with safe payment.', tags: ['Angular21', 'SSR', 'Tailwind'], category: 'Website', previewImage: 'assets/ecommerce.jpg', githubLink: 'https://github.com/Manar-ahmed1215/E-commerce', previewLink: 'https://ecommerccccce.netlify.app' },
    { title: 'Social Media Platform', desc: 'Interactive social media platform.', tags: ['Angular20', 'CSR', 'Tailwind'], category: 'Application', previewImage: 'assets/social.jpg', githubLink: 'https://github.com/Manar-ahmed1215/Social-App', previewLink: 'https://social-app-wpp8.vercel.app/#/login' },
    { title: 'Angular Journey', desc: 'My first project built with Angular.', tags: ['Angular', 'Routing'], category: 'Website', previewImage: 'assets/angular.jpg', githubLink: 'https://github.com/Manar-ahmed1215/Frist-project-in-Angular', previewLink: 'https://frist-project-in-angular.vercel.app/home' },
    { title: 'Kanban Task Manager', desc: 'Task management board.', tags: ['TypeScript', 'CRUD'], category: 'Application', previewImage: 'assets/kanban.jpg', githubLink: 'https://github.com/Manar-ahmed1215/Kanban-Board-Task-Manager', previewLink: 'https://kanban-board-task-manager-v878.vercel.app' },
    { title: 'Wanderlust Planner', desc: 'Global travel planner app.', tags: ['JS', 'Bootstrap', 'APIs'], category: 'Application', previewImage: 'assets/wanderlust.jpg', githubLink: 'https://github.com/Manar-ahmed1215/ProjectJSWanderlust--Your-Global-Travel-Planner-Starter-', previewLink: 'https://project-js-wanderlust-your-global-t.vercel.app' },
    { title: 'ContactHub', desc: 'Smart contact management system.', tags: ['JS', 'LocalStorage'], category: 'Application', previewImage: 'assets/contacthub.jpg', githubLink: 'https://github.com/Manar-ahmed1215/ContactHub---Smart-Contact-Manage', previewLink: 'https://contact-hub-smart-contact-manage.vercel.app' },
    { title: 'What\'s For Dinner', desc: 'Random recipe selector app.', tags: ['JS', 'Objects', 'Arrays'], category: 'Application', previewImage: 'assets/dinner.jpg', githubLink: 'https://github.com/Manar-ahmed1215/What-s-For-Dinner', previewLink: 'https://what-s-for-dinner-eta.vercel.app' },
    { title: 'Clarity Digital Solutions', desc: 'Landing page for digital services.', tags: ['Bootstrap', 'CSS'], category: 'Website', previewImage: 'assets/clarity.jpg', githubLink: 'https://github.com/Manar-ahmed1215/Clarity---Digital-Solutions-Platform', previewLink: 'https://clarity-digital-solutions-platform.vercel.app' },
    { title: 'Games Arena', desc: 'Gaming platform interface.', tags: ['Bootstrap', 'CSS'], category: 'Website', previewImage: 'assets/games.jpg', githubLink: 'https://github.com/Manar-ahmed1215/Games-Arena', previewLink: 'https://games-arena-gamma.vercel.app' },
    { title: 'UX Review Website', desc: 'Personal site with bold modern style.', tags: ['HTML', 'CSS', 'Figma'], category: 'Design', previewImage: 'assets/ux.jpg', githubLink: 'https://github.com/Manar-ahmed1215/ux-review-website', previewLink: 'https://ux-review-website.vercel.app' }
  ]);

  filter = signal<string>('All');
  bgClass = computed(() => this.isDarkMode() ? 'bg-slate-950 text-white' : 'bg-gray-50 text-slate-900');
  titleClass = computed(() => this.isDarkMode() ? 'text-white' : 'text-slate-900');
  textMuted = computed(() => this.isDarkMode() ? 'text-slate-400' : 'text-slate-600');
  cardClass = computed(() => this.isDarkMode() ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-200');

  filteredProjects = computed(() => {
    if (this.filter() === 'All') return this.projects();
    return this.projects().filter(p => p.category === this.filter());
  });

  setFilter(category: string) {
    this.filter.set(category);
    setTimeout(() => this.observeCards(), 30);
  }

  ngAfterViewInit() {
    this.observeCards();
  }

  private observeCards() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('mobile-show');
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = this.el.nativeElement.querySelectorAll('.mobile-card');
    cards.forEach((card: HTMLElement) => observer.observe(card));
  }
}