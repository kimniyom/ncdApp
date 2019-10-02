import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonconnectionPage } from './nonconnection.page';

describe('NonconnectionPage', () => {
  let component: NonconnectionPage;
  let fixture: ComponentFixture<NonconnectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonconnectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonconnectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
