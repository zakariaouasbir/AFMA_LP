import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angulartics2Module } from 'angulartics2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '@shared';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { QuestionTableComponent } from './question/questionTable.component';
import { QuestionCreateComponent } from './question/questionCREATE.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    QuestionTableComponent,
    QuestionCreateComponent,
    RouterModule,
    NgbModule,
    SidebarComponent,
    Angulartics2Module,
  ],
  declarations: [AdminComponent, QuestionComponent, HeaderComponent],
})
export class AdminModule {}
