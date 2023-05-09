import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './simulator-routing.module';
import { SimulatorComponent } from './simulator.component';
import { FirstQuestionComponent } from './firstQuestion/firstQuestion.component';

@NgModule({
  imports: [CommonModule, AboutRoutingModule],
  declarations: [SimulatorComponent, FirstQuestionComponent],
})
export class SimulatorModule {}
