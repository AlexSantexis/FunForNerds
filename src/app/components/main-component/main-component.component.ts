import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.css',
})
export class MainComponentComponent {
  currentWord: string = '';
  wordie: string = 'hellooo';
  @Output() userInputEvent = new EventEmitter<string>();
  @Output() wordSubmitted = new EventEmitter<string>();

  onInput(event: Event) {
    this.currentWord = (event.target as HTMLInputElement).value;
    this.userInputEvent.emit(this.currentWord);
  }
  onSubmit() {
    this.wordSubmitted.emit(this.currentWord);
  }
}
