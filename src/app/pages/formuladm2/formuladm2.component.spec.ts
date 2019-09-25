import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formuladm2Component } from './formuladm2.component';

describe('Formuladm2Component', () => {
  let component: Formuladm2Component;
  let fixture: ComponentFixture<Formuladm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formuladm2Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formuladm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
