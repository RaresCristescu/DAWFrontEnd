import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component2comComponent } from './component2com.component';

describe('Component2comComponent', () => {
  let component: Component2comComponent;
  let fixture: ComponentFixture<Component2comComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component2comComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component2comComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
