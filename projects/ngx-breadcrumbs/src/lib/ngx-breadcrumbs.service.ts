import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxBreadcrumb } from './ngx-breadcrumb';

@Injectable({providedIn: 'root'})
export class NgxBreadcrumbsService {
  dynamicCrumbs: Subject<NgxBreadcrumb> = new Subject<NgxBreadcrumb>();

  constructor() { }

  customCrumbTitle(title: string, component?) {
    const crumb: NgxBreadcrumb = {label: title, component: component};
    this.dynamicCrumbs.next(crumb);
  }
}
