import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LandingPageService } from '@app/landingpage/landingpage.service';
import { SimulatorService } from './simulator/simulator.service';

const routes: Routes = [
  SimulatorService.childRoutes([
    { path: 'sm', loadChildren: () => import('./simulator/simulator.module').then((m) => m.SimulatorModule) },
  ]),
  LandingPageService.childRoutes([
    { path: 'lp', loadChildren: () => import('./landingpage/landingpage.module').then((m) => m.LandingPageModule) },
  ]),
  { path: '**', redirectTo: 'lp', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
