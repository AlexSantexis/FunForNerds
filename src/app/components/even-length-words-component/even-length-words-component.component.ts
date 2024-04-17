import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even-length-words-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './even-length-words-component.component.html',
  styleUrl: './even-length-words-component.component.css',
})
export class EvenLengthWordsComponentComponent {
  @Input() evenWord: string = '';
  @Input() evenWords: string[] = [];
}
