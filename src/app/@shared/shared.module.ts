import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoaderComponent } from './loader/loader.component';
import { MomentService } from './moment.service';

@NgModule({
  imports: [TranslateModule, CommonModule],
  declarations: [LoaderComponent],
  exports: [LoaderComponent],
  providers: [MomentService],
})
export class SharedModule {}
