import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCardContentComponent } from './display-card-content.component';

describe('DisplayCardContentComponent', () => {
  let component: DisplayCardContentComponent;
  let fixture: ComponentFixture<DisplayCardContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCardContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
