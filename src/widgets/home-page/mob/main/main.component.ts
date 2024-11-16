import { Component } from '@angular/core';
import { SectionParagraphComponent } from '@entities/mob/section-paragraph/section-paragraph.component';
import { SectionTextComponent } from '@entities/mob/section-text/section-text.component';

@Component({
  selector: 'app-mob-main',
  standalone: true,
  imports: [SectionTextComponent, SectionParagraphComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.module.scss',
})
export class MainComponent {}
