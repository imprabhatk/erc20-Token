import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erc20TokenComponent } from './erc20-token.component';

describe('Erc20TokenComponent', () => {
  let component: Erc20TokenComponent;
  let fixture: ComponentFixture<Erc20TokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Erc20TokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Erc20TokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
