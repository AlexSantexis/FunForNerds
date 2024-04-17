import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenLengthWordsComponentComponent } from './even-length-words-component.component';

describe('EvenLengthWordsComponentComponent', () => {
  let component: EvenLengthWordsComponentComponent;
  let fixture: ComponentFixture<EvenLengthWordsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvenLengthWordsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvenLengthWordsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
