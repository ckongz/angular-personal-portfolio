
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
    `I am a third-year Bachelor of Science in Information
    Technology student at Holy Angel University, with a strong interest
    in web development, UI/UX design, and creating meaningful digital
    experiences.

    Throughout my academic journey, I have gained hands-on experience
    in building websites and applications using technologies such as
    Angular, Vue.js, JavaScript, Node.js, and MongoDB. I also enjoy
    using Figma to transform creative ideas into visually appealing
    and user-friendly interfaces.

    As an aspiring web developer and UI/UX designer, I believe that
    technology should not only function effectively but also provide
    a positive experience for its users. I continuously challenge
    myself to learn new skills, explore different technologies, and
    grow into a developer who combines creativity with technical
    knowledge.`;
}
