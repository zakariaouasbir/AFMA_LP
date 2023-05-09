import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LandingPageService } from '@app/landingpage/landingpage.service';
import { AdminService } from './admin/admin.service';
import { QuestionComponent } from './admin/question/question.component';
import { SimulatorService } from './simulator/simulator.service';

const routes: Routes = [
  LandingPageService.childRoutes([
    { path: 'lp', loadChildren: () => import('./landingpage/landingpage.module').then((m) => m.LandingPageModule) },
  ]),
  SimulatorService.childRoutes([
    { path: 'sm', loadChildren: () => import('./simulator/simulator.module').then((m) => m.SimulatorModule) },
  ]),
  AdminService.childRoutes([
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule) },
    { path: 'question', component: QuestionComponent, outlet: 'admin' },
  ]),
  { path: '**', redirectTo: 'lp', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
