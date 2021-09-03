import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingsComponent } from './sings.component';

describe('SingsComponent', () => {
  let component: SingsComponent;
  let fixture: ComponentFixture<SingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
