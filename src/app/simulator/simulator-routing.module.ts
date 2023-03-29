import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimulatorComponent } from './simulator.component';

const routes: Routes = [{ path: '', component: SimulatorComponent, data: { title: 'Simulateur' } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AboutRoutingModule {}
