import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviekComponent } from './moviek.component';

describe('MoviekComponent', () => {
  let component: MoviekComponent;
  let fixture: ComponentFixture<MoviekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
