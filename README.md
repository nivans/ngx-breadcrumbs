# @nivans / Angular 6 Bootstrap 4 breadcrumbs plugin
An Angular 6 module create a breadcrumbs based on RouteModule data.

## PLUGIN IS IN PROCESS OF DEVELOPMENT
## Installation
```bash
# install via npm
$ npm --save install @nivans/ngx-breadcrumbs
# or install via yarn
$ yarn add @nivans/ngx-breadcrumbs
```

To use this module you have to add it to the `imports` section in your `app.module.ts`. It should be lower than `RouterModule` import.

```javascript
import { RouterModule } from '@angular/router';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NgxBreadcrumbsModule.forRoot()
  ],  
})
export class AppModule {}
```

Now you have to set it on the place in your global template. Usually, the best place is in `AppComponent` template.
```javascript
@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <mc-breadcrumbs></mc-breadcrumbs>
      <router-outlet></router-outlet>
    </div>`
})
export class AppComponent {}
```

## Configuration

Configuration of the breadcrumbs module is accessable in your route configuration.

```javascript
const routes: Route[] = {
  {
    path: '',
    component: HomeComponent,
    data: {
      breadcrumb: 'Home',
      isHome: true,
      icon: 'fa fa-home',
      show: false
    }
  }
};
```

