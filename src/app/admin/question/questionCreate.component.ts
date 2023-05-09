import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppState } from '@app/store/app.state';
import { addQuestion, loadQuestions } from '@app/store/state/question/question.actions';
import { IQuestion } from '@app/store/state/question/question.model';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-questions-create',
  imports: [CommonModule, ReactiveFormsModule, NgbCollapseModule],
  template: `
    <button
      type="button"
      class="btn btn-outline-primary ms-2"
      (click)="isCollapsed = !isCollapsed"
      [attr.aria-expanded]="!isCollapsed"
      aria-controls="collapseExample"
    >
      Add
    </button>
    <div #collapse="ngbCollapse" [(ngbCollapse)]="isCollapsed">
      <form [formGroup]="questionForm">
        <div class="row">
          <br />
          <div class="col-lg-1 col-md-6 mb-4 mb-md-0">
            <label class="control-label">Question : </label>
          </div>
          <div class="col-lg-9 col-md-6 mb-4 mb-md-0">
            <input formControlName="content" type="text" class="form-control" id="inputName" placeholder="Question" />
          </div>
          <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
            <button (click)="onAddQuestion()" type="type" class="btn btn-success">Add</button>
          </div>
        </div>
      </form>
    </div>
  `,
  standalone: true,
})
export class QuestionCreateComponent implements OnInit {
  questionForm: FormGroup;
  public isCollapsed = true;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.initForm();
  }

  onAddQuestion() {
    if (!this.questionForm.valid) {
      return;
    }
    //this.store.dispatch(setLoadingSpinner({ status: true }));
    const question: IQuestion = {
      id: null as any,
      content: this.questionForm.value.content,
      createDate: null as any,
      ranking: null as any,
    };
    //this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(addQuestion({ question }));
    // this.store.dispatch(updateQuestion({ question }));
  }

  initForm() {
    this.questionForm = new FormGroup({
      idquestion: new FormControl(null, []),
      content: new FormControl(null, [Validators.required]),
    });
  }
}
