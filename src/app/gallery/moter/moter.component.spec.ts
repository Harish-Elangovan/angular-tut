import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoterComponent } from './moter.component';

describe('MoterComponent', () => {
  let component: MoterComponent;
  let fixture: ComponentFixture<MoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
