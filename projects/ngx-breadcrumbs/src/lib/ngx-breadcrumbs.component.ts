import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Route } from '@angular/router';
import { filter, map } from 'rxjs/internal/operators';
import { NgxBreadcrumb } from './ngx-breadcrumb';
import { Observable, of } from 'rxjs';
import { NgxBreadcrumbsService } from './ngx-breadcrumbs.service';

@Component({
  selector: 'nvs-ngx-breadcrumbs',
  template: `
    <nav aria-label="breadcrumb"
         *ngIf="show">
      <ol class="breadcrumb">
        <li *ngFor="let breadcrumb of breadcrumbs"
            class="breadcrumb-item"
            [ngClass]="{'active': !breadcrumb.url}">
          <a [routerLink]="[breadcrumb.url]"
             *ngIf="breadcrumb.url">
            <i class="{{ breadcrumb.icon }}" *ngIf="breadcrumb.icon"></i>
            {{ breadcrumb.label }}
          </a>
          <span *ngIf="!breadcrumb.url">
            <i class="{{ breadcrumb.icon }}" *ngIf="breadcrumb.icon"></i>
            {{ breadcrumb.label }}
          </span>
        </li>
      </ol>
    </nav>
  `,
  styles: []
})
export class NgxBreadcrumbsComponent implements OnInit {
  customCrumbs = [];
  breadcrumbs: NgxBreadcrumb[];
  show = true;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private service: NgxBreadcrumbsService) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.breadcrumbs = this.handleRoute(this.activatedRoute.root);
      });
    this.service.dynamicCrumbs.subscribe(crumb => {
      this.customCrumbs[crumb.component] = crumb;
      this.breadcrumbs = this.handleRoute(this.activatedRoute.root);
    });
  }

  handleRoute(route: ActivatedRoute,
              breadcrumbs: Array<NgxBreadcrumb> = []):
  Array<NgxBreadcrumb> {
    if (breadcrumbs.length === 0) {
      breadcrumbs.push(this.getCrumbFromRoute(this.getHomeRoute()));
    }

    if (route.routeConfig !== null &&
        'data' in route.routeConfig &&
        'breadcrumb' in route.routeConfig.data &&
        !route.routeConfig.data.isHome
    ) {
      const urlPrefix = breadcrumbs[breadcrumbs.length - 1] ? breadcrumbs[breadcrumbs.length - 1].url : '';
      const customCrumb = route.routeConfig.component && this.customCrumbs[route.routeConfig.component.name];
      const defaultCrumb = this.getCrumbFromRoute(route.routeConfig, urlPrefix);
      const crumb = customCrumb ? Object.assign(defaultCrumb, customCrumb) : defaultCrumb;
      breadcrumbs = [ ...breadcrumbs, crumb ];
    }

    if (route.firstChild) {
      return this.handleRoute(route.firstChild, breadcrumbs);
    }

    delete(breadcrumbs[breadcrumbs.length - 1].url);
    this.show = breadcrumbs[breadcrumbs.length - 1].show;
    return breadcrumbs;
  }

  getHomeRoute() {
    return this.router.config.filter(crumb => crumb.data && crumb.data.isHome)[0];
  }

  getCrumbFromRoute(route: Route, urlPrefix = null): NgxBreadcrumb {
    return {
      label: route.data && route.data.breadcrumb,
      url: urlPrefix ? `${urlPrefix}/${route.path}` : route.path || '/',
      component: route.component && route.component.name,
      icon: route.data.icon,
      show: route.data.hasOwnProperty('show') ? route.data.show : true
    };
  }
}
