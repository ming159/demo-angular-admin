import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMainEditComponent } from './dialog-main-edit.component';

describe('DialogMainEditComponent', () => {
  let component: DialogMainEditComponent;
  let fixture: ComponentFixture<DialogMainEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMainEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogMainEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
