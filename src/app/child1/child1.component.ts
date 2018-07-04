import { Component, OnInit } from '@angular/core';
import { NgxBreadcrumbsService } from '../../../projects/ngx-breadcrumbs/src/lib/ngx-breadcrumbs.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  constructor(private breadcrumbService: NgxBreadcrumbsService) {
  }

  ngOnInit() {
    this.breadcrumbService.customCrumbTitle('Custom dynamic title 1', this.constructor.name);

    setTimeout(() => {
      this.breadcrumbService.customCrumbTitle('Custom dynamic title 2', this.constructor.name);
    }, 3000);
  }
}
