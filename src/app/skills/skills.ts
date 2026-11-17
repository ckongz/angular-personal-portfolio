
import { Component, input, output } from '@angular/core';
import { Proficiency } from '../proficiency';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

  // Data received from the parent App component
  skills = input.required<string[]>();
  proficiencies = input.required<Proficiency[]>();

  // Used for the Angular checkpoint section
  checkpoint = input(false);

  // Sends selected skill back to App
  skillSelected = output<string>();

  activeSkill = '';

  selectSkill(skill: string): void {
    this.activeSkill = skill;
    this.skillSelected.emit(skill);
  }

  skillIcon(skill: string): string {
    const icons: Record<string, string> = {
      'Angular': 'A',
      'TypeScript': 'TS',
      'JavaScript': 'JS',
      'HTML': 'H',
      'CSS': 'C',
      'Figma': 'F',
      'Vue.js': 'V',
      'Node.js': 'N',
      'Git': 'G'
    };

    return icons[skill] ?? '✦';
  }
}
