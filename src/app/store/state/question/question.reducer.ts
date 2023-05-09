import { createReducer, on } from '@ngrx/store';
import {
  addQuestionSuccess,
  updateQuestionSuccess,
  deleteQuestionSuccess,
  loadQuestionsSuccess,
} from './question.actions';
import { questionsAdapter, initialState } from './question.state';

const _questionsReducer = createReducer(
  initialState,
  on(addQuestionSuccess, (state, action) => {
    return questionsAdapter.addOne(action.question, {
      ...state,
    });
  }),

  on(updateQuestionSuccess, (state, action) => {
    return questionsAdapter.updateOne(action.question, state);
  }),

  on(deleteQuestionSuccess, (state, { id }) => {
    return questionsAdapter.removeOne(id, state);
  }),

  on(loadQuestionsSuccess, (state, action) => {
    return questionsAdapter.setAll(action.questions, {
      ...state,
    });
  })
);

export function questionsReducer(state: any, action: any) {
  return _questionsReducer(state, action);
}
