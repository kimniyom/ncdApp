import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulardm2Component } from './formulardm2.component';

describe('Formulardm2Component', () => {
  let component: Formulardm2Component;
  let fixture: ComponentFixture<Formulardm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formulardm2Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formulardm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
