import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaobesityPage } from './formulaobesity.page';

describe('FormulaobesityPage', () => {
  let component: FormulaobesityPage;
  let fixture: ComponentFixture<FormulaobesityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaobesityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaobesityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
