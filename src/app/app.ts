import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./layouts/navbar/navbar.component";
import { HomeComponent } from "./features/home/home.component";
import { AboutComponent } from "./features/about/about.component";
import { ProjectsComponent } from "./features/projects/projects.component";
import { SkillsComponent } from "./features/skills/skills.component";
import { ContactComponent } from "./features/contact/contact.component";
import { ExperienceComponent } from './features/experience/experience.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HomeComponent, AboutComponent, ProjectsComponent, SkillsComponent, ContactComponent, ExperienceComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My_Portfolio');
  isDarkMode = signal<boolean>(true);

  toggleMode() {
    this.isDarkMode.update(value => !value);
  }
}
