import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExample1Component } from './page-example1.component';

describe('PageExample1Component', () => {
  let component: PageExample1Component;
  let fixture: ComponentFixture<PageExample1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageExample1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageExample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
