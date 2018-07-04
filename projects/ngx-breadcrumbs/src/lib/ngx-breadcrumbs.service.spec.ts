import { TestBed, inject } from '@angular/core/testing';

import { NgxBreadcrumbsService } from './ngx-breadcrumbs.service';

describe('NgxBreadcrumbsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxBreadcrumbsService]
    });
  });

  it('should be created', inject([NgxBreadcrumbsService], (service: NgxBreadcrumbsService) => {
    expect(service).toBeTruthy();
  }));
});
