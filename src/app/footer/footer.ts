
import { Component, input } from '@angular/core';
import { Proficiency } from '../proficiency';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  fullName = input.required<string>();
  year = input.required<number>();
  proficiencies = input.required<Proficiency[]>();

  checkpoint = input(false);
}
