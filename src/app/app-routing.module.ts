import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LandingPageService } from '@app/landingpage/landingpage.service';

const routes: Routes = [
  LandingPageService.childRoutes([
    { path: 'simulator', loadChildren: () => import('./simulator/simulator.module').then((m) => m.SimulatorModule) },
  ]),
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
