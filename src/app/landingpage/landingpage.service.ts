import { Routes, Route } from '@angular/router';

import { LandingPageComponent } from './landingpage.component';

/**
 * Provides helper methods to create routes.
 */
export class LandingPageService {
  /**
   * Creates routes using the LandingPageService component and authentication.
   * @param routes The routes to add.
   * @return The new route using LandingPageService as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: LandingPageComponent,
      children: routes,
    };
  }
}
