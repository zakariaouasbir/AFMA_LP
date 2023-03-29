import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angulartics2Module } from 'angulartics2';

import { SharedModule } from '@shared';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, SharedModule, Angulartics2Module],
  declarations: [HomeComponent],
})
export class HomeModule {}
