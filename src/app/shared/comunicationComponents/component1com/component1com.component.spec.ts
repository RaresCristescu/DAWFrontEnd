import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component1comComponent } from './component1com.component';

describe('Component1comComponent', () => {
  let component: Component1comComponent;
  let fixture: ComponentFixture<Component1comComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component1comComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component1comComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
