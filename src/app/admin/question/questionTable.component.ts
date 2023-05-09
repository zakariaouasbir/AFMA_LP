import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Question } from '@app/model/question.model';
import { AppState } from '@app/store/app.state';
import { deleteQuestion, loadQuestions } from '@app/store/state/question/question.actions';
import { getQuestions } from '@app/store/state/question/question.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-questions-table',
  imports: [CommonModule],
  styles: [
    `
      .viewport {
        flex-direction: row;
        justify-content: center;
        align-content: space-between;
        height: calc(100vh - 59px);
        @media screen and (max-width: 840px) {
          height: calc(100vh - 107px);
        }
        > div {
          width: 100%;
        }
      }
    `,
  ],
  template: `
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">content</th>
          <th scope="col">order</th>
          <th scope="col">date</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let q of questions | async">
          <td>{{ q.content }}</td>
          <td>{{ q.ranking }}</td>
          <td>{{ q.createDate }}</td>
          <td><button (click)="onDeleteQuetion(q?.id)" type="type" class="btn btn-danger">Delete</button></td>
        </tr>
      </tbody>
    </table>
  `,
  standalone: true,
})
export class QuestionTableComponent implements OnInit {
  questions: Observable<Question[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.questions = this.store.select(getQuestions);
    this.store.dispatch(loadQuestions());
  }

  onDeleteQuetion(id: any) {
    this.store.dispatch(deleteQuestion({ id }));
  }
}
