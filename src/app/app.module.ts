import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { PageExample1Component } from './page-example1/page-example1.component';
import { PageExample2Component } from './page-example2/page-example2.component';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { NgxBreadcrumbsModule } from '../../projects/ngx-breadcrumbs/src/lib/ngx-breadcrumbs.module';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      breadcrumb: 'Home',
      isHome: true,
      icon: 'fa fa-home',
      show: false
    },
    pathMatch: 'full'
  },
  {
    path: 'page-example-1',
    component: PageExample1Component,
    data: { breadcrumb: 'Page Example 1' }
  },
  {
    path: 'page-example-2',
    data: { breadcrumb: 'Page Example 2' },
    children: [
      {
        path: '',
        component: PageExample2Component,
      },
      {
        path: 'child-1',
        component: Child1Component,
        data: {
          breadcrumb: 'Child 1',
          show: false
        }
      },
      {
        path: 'child-2',
        component: Child2Component,
        data: { breadcrumb: 'Child 2' }
      }
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageExample1Component,
    PageExample2Component,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NgxBreadcrumbsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
