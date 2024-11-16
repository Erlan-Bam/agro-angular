import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-paragraph',
  standalone: true,
  imports: [],
  templateUrl: './section-paragraph.component.html',
  styleUrl: './section-paragraph.component.module.scss',
})
export class SectionParagraphComponent {
  @Input() paragraph: string = '';
}
