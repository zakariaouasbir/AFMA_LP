import { Injectable } from '@angular/core';
import { QuestionService } from '@app/services/question.service';
import { setErrorMessage, setLoadingSpinner, setSuccesMessage } from '@app/store/Shared/shared.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { RouterNavigatedAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { select, Store } from '@ngrx/store';
import { catchError, EMPTY, filter, map, mergeMap, of, switchMap, withLatestFrom } from 'rxjs';

import {
  addQuestion,
  addQuestionFailed,
  addQuestionSuccess,
  deleteQuestion,
  deleteQuestionFailed,
  deleteQuestionSuccess,
  loadQuestions,
  loadQuestionsFailed,
  loadQuestionsSuccess,
  updateQuestion,
  updateQuestionFailed,
  updateQuestionSuccess,
} from './question.actions';
import { IQuestion } from './question.model';
import { getQuestions } from './question.selector';

@Injectable()
export class QuestionEffect {
  constructor(private actions$: Actions, private questionService: QuestionService, private store: Store) {}

  loadQuestions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadQuestions),
      withLatestFrom(this.store.select(getQuestions)),
      mergeMap(([action, questions]) => {
        return this.questionService.getQuestions1().pipe(
          map((questions) => {
            if (questions) return loadQuestionsSuccess({ questions });
            else return loadQuestionsFailed({ errorMessage: 'unknows error' });
          }),
          catchError((err, caught) => {
            let errMsg = err.message ? err.message : err.status ? `${err.status} - ${err.statusText}` : 'Server error';
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return of(setErrorMessage({ message: errMsg }));
          })
        );
      })
    );
  });

  addQuestion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addQuestion),
      mergeMap((action) => {
        return this.questionService.addQuestion1(action.question).pipe(
          map((data) => {
            if (data) {
              const question = { ...action.question, id: data.id };
              this.store.dispatch(setSuccesMessage({ message: 'Item added successfully!' }));
              return addQuestionSuccess({ question });
            } else return addQuestionFailed({ errorMessage: 'unknows error' });
          }),
          catchError((err, caught) => {
            let errMsg = err.message ? err.message : err.status ? `${err.status} - ${err.statusText}` : 'Server error';
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return of(setErrorMessage({ message: errMsg }));
          })
        );
      })
    );
  });

  updateQuestion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateQuestion),
      switchMap((action) => {
        return this.questionService.updateQuestion(action.question).pipe(
          map((data) => {
            if (data) {
              const question: Update<IQuestion> = {
                id: action.question.id,
                changes: {
                  ...action.question,
                },
              };
              return updateQuestionSuccess({ question: question });
            } else return updateQuestionFailed({ errorMessage: 'UNKNOWS ERROR' });
          }),
          catchError((err, caught) => {
            let errMsg = err.message ? err.message : err.status ? `${err.status} - ${err.statusText}` : 'Server error';
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return of(setErrorMessage({ message: errMsg }));
          })
        );
      })
    );
  });

  deleteQuestion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteQuestion),
      switchMap((action) => {
        return this.questionService.delete(action.id).pipe(
          map((data) => {
            if (data) return deleteQuestionSuccess({ id: action.id });
            else return deleteQuestionFailed({ errorMessage: 'UNKNOWS ERROR' });
          }),
          catchError((err, caught) => {
            let errMsg = err.message ? err.message : err.status ? `${err.status} - ${err.statusText}` : 'Server error';
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return of(setErrorMessage({ message: errMsg }));
          })
        );
      })
    );
  });
}
