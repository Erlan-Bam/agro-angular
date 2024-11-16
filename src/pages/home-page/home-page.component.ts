import { Component } from '@angular/core';
import { HeaderComponent } from '../../features/mob/header/header.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.module.scss',
})
export class HomePageComponent {}
