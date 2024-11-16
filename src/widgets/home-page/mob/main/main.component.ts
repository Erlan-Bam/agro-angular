import { Component } from '@angular/core';
import { SectionTextComponent } from '@entities/mob/section-text/section-text.component';

@Component({
  selector: 'app-mob-main',
  standalone: true,
  imports: [SectionTextComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
