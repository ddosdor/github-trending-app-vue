import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiLoadingSpinnerComponent } from './ui-loading-spinner.component';

describe('UiLoadingSpinnerComponent', () => {
  let component: UiLoadingSpinnerComponent;
  let fixture: ComponentFixture<UiLoadingSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiLoadingSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiLoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
