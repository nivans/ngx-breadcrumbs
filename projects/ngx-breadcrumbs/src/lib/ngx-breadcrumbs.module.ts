import { NgModule } from '@angular/core';
import { NgxBreadcrumbsComponent } from './ngx-breadcrumbs.component';
import { NgxBreadcrumbsService } from './ngx-breadcrumbs.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NgxBreadcrumbsComponent],
  exports: [NgxBreadcrumbsComponent],
  providers: [NgxBreadcrumbsService]
})
export class NgxBreadcrumbsModule { }
