import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExample2Component } from './page-example2.component';

describe('PageExample2Component', () => {
  let component: PageExample2Component;
  let fixture: ComponentFixture<PageExample2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageExample2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
