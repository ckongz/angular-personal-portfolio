
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {
  cardTitle = 'A Little About Me';

  description =
    'I am a third-year BS Information Technology student at Holy Angel University. I am passionate about web development, UI/UX design, and creating digital experiences that combine creativity and functionality.';
}
