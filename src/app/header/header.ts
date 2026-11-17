
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  fullName = input.required<string>();
  title = input.required<string>();
  introduction = input.required<string>();
  email = input.required<string>();
  phone = input.required<string>();

  checkpoint = input(false);
}
