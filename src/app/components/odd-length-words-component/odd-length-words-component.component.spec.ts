import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddLengthWordsComponentComponent } from './odd-length-words-component.component';

describe('OddLengthWordsComponentComponent', () => {
  let component: OddLengthWordsComponentComponent;
  let fixture: ComponentFixture<OddLengthWordsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OddLengthWordsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OddLengthWordsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
