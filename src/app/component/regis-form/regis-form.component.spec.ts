import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisFormComponent } from './regis-form.component';

describe('RegisFormComponent', () => {
  let component: RegisFormComponent;
  let fixture: ComponentFixture<RegisFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
