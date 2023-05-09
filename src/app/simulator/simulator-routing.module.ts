import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondQuestionComponent } from './secondQuestion/secondQuestion.component';

import { SimulatorComponent } from './simulator.component';

const routes: Routes = [
  { path: '', component: SimulatorComponent, data: { title: 'Simulateur' } },
  { path: 'sq', component: SecondQuestionComponent, data: { title: 'sq' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AboutRoutingModule {}
