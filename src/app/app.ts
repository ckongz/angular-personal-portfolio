
import { Component } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Sophia Casey M. Ong';
  location = 'Angeles City, Pampanga';
  email = 'sophiaong.rels@gmail.com';
  phone = '0949 980 2401';

  intro =
    'A third-year BS Information Technology student with a passion for web development, UI/UX design, and creating meaningful digital experiences. I love turning creative ideas into functional and visually engaging websites.';

  skills = [
    'HTML & CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Vue.js',
    'Node.js',
    'Figma',
    'UI/UX Design'
  ];

  message = 'Your next click might make my day!';
  clickCount = 0;

  showMessage(): void {
    this.clickCount++;

    this.message =
      `You clicked the button ${this.clickCount} time(s). Thank you for stopping by!`;
  }
}
