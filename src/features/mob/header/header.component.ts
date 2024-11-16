import { Component, Input } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-mob-header',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.module.scss',
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
