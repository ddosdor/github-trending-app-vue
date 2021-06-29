import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiLoadingContentWrapperComponent } from './ui-loading-content-wrapper.component';

describe('UiLoadingContentWrapperComponent', () => {
  let component: UiLoadingContentWrapperComponent;
  let fixture: ComponentFixture<UiLoadingContentWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiLoadingContentWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiLoadingContentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
