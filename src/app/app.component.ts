import { Component } from '@angular/core';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { EvenLengthWordsComponentComponent } from './components/even-length-words-component/even-length-words-component.component';
import { OddLengthWordsComponentComponent } from './components/odd-length-words-component/odd-length-words-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MainComponentComponent,
    EvenLengthWordsComponentComponent,
    OddLengthWordsComponentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FunForNerds';
  partialOddWord: string = '';
  partialEvenWord: string = '';

  oddLengthWords: string[] = [];
  evenLengthWords: string[] = [];

  onUserInput(word: string) {
    if (word.length % 2 === 0) {
      this.partialOddWord = '';
      this.partialEvenWord = word;
    } else {
      this.partialEvenWord = '';
      this.partialOddWord = word;
    }
  }

  onSubmitInput(word: string) {
    if (word.length % 2 === 0) {
      this.evenLengthWords.push(word);
      console.log(word);
    } else {
      this.oddLengthWords.push(word);
      console.log(word);
    }
  }
}
