import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBreadcrumbsComponent } from './ngx-breadcrumbs.component';

describe('NgxBreadcrumbsComponent', () => {
  let component: NgxBreadcrumbsComponent;
  let fixture: ComponentFixture<NgxBreadcrumbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBreadcrumbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
