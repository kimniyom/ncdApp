import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastformPage } from './lastform.page';

describe('LastformPage', () => {
  let component: LastformPage;
  let fixture: ComponentFixture<LastformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastformPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
