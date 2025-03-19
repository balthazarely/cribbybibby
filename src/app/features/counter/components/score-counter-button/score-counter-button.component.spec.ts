import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScoreCounterButtonComponent } from './score-counter-button.component';
import { expect, jest, test } from '@jest/globals';

describe('ScoreCounterButtonComponent', () => {
  let component: ScoreCounterButtonComponent;
  let fixture: ComponentFixture<ScoreCounterButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreCounterButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScoreCounterButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('handleClick', () => {
    it('Should emit a value of either 1 or 2 (not currently)', () => {
      const button = fixture.nativeElement.querySelector('button');
      button.click();
      fixture.detectChanges(); // Update the view
      jest.spyOn(component.buttonClick, 'emit');
      component.handleClick(1);
      expect(component.buttonClick.emit).toHaveBeenCalledWith(1);
      // component.handleClick(2);
      // expect(component.buttonClick.emit).toHaveBeenCalledWith(2);
    });
  });
});
