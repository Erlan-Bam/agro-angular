import { Component } from '@angular/core';
import { HeaderComponent } from '../../features/mob/header/header.component';
import { MainComponent } from '@widgets/home-page/mob/main/main.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, MainComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.module.scss',
})
export class HomePageComponent {}
