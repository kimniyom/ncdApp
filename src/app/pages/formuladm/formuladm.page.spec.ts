import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuladmPage } from './formuladm.page';

describe('FormuladmPage', () => {
  let component: FormuladmPage;
  let fixture: ComponentFixture<FormuladmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormuladmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormuladmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
