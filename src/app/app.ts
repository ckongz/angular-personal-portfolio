
import { Component } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';
import { Header } from './header/header';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { Proficiency } from './proficiency';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, ProfileCard, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Sophia Casey M. Ong';

  title = 'IT Student | Web Developer | UI/UX Enthusiast';

  introduction =
    'A third-year BS Information Technology student at Holy Angel University, passionate about developing meaningful digital experiences through web development and UI/UX design.';

  email = 'sophiacaseyong@gmail.com';
  phone = '09499802401';
  location = 'Angeles City, Pampanga';

  year = new Date().getFullYear();

  clickCount = 0;
  clickMessage = 'Your next click might make my day!';

  showMessage(): void {
    this.clickCount++;

    this.clickMessage =
      `You clicked the button ${this.clickCount} time(s).`;
  }

  skills: string[] = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Figma',
    'Vue.js',
    'Node.js',
    'Git'
  ];

  proficiencies: Proficiency[] = [
    { name: 'Frontend Development', level: 85 },
    { name: 'UI/UX Design', level: 90 },
    { name: 'Backend Development', level: 75 },
    { name: 'Database Management', level: 80 }
  ];

  tools: string[] = [
    'Visual Studio Code',
    'GitHub',
    'Postman',
    'Figma'
  ];

  selectedSkill = '';

  onSkillSelected(skill: string): void {
    this.selectedSkill = skill;
  }
}
