import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AboutRoutingModule } from './simulator-routing.module';
import { SimulatorComponent } from './simulator.component';

@NgModule({
  imports: [CommonModule, TranslateModule, AboutRoutingModule],
  declarations: [SimulatorComponent],
})
export class SimulatorModule {}
