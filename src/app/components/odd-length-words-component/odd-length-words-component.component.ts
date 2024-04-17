import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-odd-length-words-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './odd-length-words-component.component.html',
  styleUrl: './odd-length-words-component.component.css',
})
export class OddLengthWordsComponentComponent {
  @Input() oddWord: string = '';
  @Input() oddWords: string[] = [];
}
