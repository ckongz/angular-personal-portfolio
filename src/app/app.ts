
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
  phone = '+09499802401';
  github = ' https://github.com/ckongz/angular-personal-portfolio '

  intro =
    'I am a third-year Bachelor of Science in Information Technology student at Holy Angel University with a strong interest in web development and UI/UX design. My goal is to become a developer who creates websites and applications that are visually appealing, accessible, responsive, and functional. Through academic projects and hands-on activities, I have explored frontend and backend technologies and learned how design and programming work together to create meaningful digital experiences. I enjoy transforming creative ideas into interactive websites, solving technical problems, and continuously improving my development skills. As I progress in my studies, I hope to collaborate with other developers, contribute to innovative projects, and create digital solutions that make technology more useful and accessible to people.';

  skills = [
    'HTML & CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Vue.js',
    'Node.js',
    'Figma',
    'UI/UX Design',
    'Git & GitHub',
    'MongoDB'
  ];

  technicalProficiencies = [
    {
      category: 'Frontend Development',
      number: '01',
      description: 'Creating responsive and interactive web interfaces.',
      technologies: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypeScript',
        'Angular',
        'Vue.js'
      ]
    },
    {
      category: 'Backend Development',
      number: '02',
      description: 'Building application logic, APIs, and data-driven features.',
      technologies: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'REST APIs'
      ]
    },
    {
      category: 'Design & Development Tools',
      number: '03',
      description: 'Designing user experiences and managing development workflows.',
      technologies: [
        'Figma',
        'UI/UX Design',
        'Git',
        'GitHub',
        'VS Code'
      ]
    }
  ];

  message = 'Your next click might make my day!';
  clickCount = 0;

  showMessage(): void {
    this.clickCount++;

    this.message =
      `You clicked the button ${this.clickCount} time(s). Thank you for stopping by!`;
  }
}
