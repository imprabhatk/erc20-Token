import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erc20Component } from './erc20.component';

describe('Erc20Component', () => {
  let component: Erc20Component;
  let fixture: ComponentFixture<Erc20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Erc20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Erc20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
