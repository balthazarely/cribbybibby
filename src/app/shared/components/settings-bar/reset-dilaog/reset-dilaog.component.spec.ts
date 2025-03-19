import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetDilaogComponent } from './reset-dilaog.component';

describe('ResetDilaogComponent', () => {
  let component: ResetDilaogComponent;
  let fixture: ComponentFixture<ResetDilaogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetDilaogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetDilaogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
