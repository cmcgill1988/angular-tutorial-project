import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonDisplayCardComponent } from './skeleton-display-card.component';

describe('SkeletonDisplayCardComponent', () => {
  let component: SkeletonDisplayCardComponent;
  let fixture: ComponentFixture<SkeletonDisplayCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletonDisplayCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonDisplayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
