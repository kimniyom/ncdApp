import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularhtPage } from './formularht.page';

describe('FormularhtPage', () => {
  let component: FormularhtPage;
  let fixture: ComponentFixture<FormularhtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularhtPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularhtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
