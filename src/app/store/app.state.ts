import { SHARED_STATE_NAME } from './Shared/shared.selector';
import { SharedReducer } from './Shared/shared.reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { SharedState } from './Shared/shared.state';
import { QuestionsState } from './state/question/question.state';
import { questionsReducer } from './state/question/question.reducer';
import { QUESTION_STATE_NAME } from './state/question/question.selector';

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  [QUESTION_STATE_NAME]: QuestionsState;
  router: RouterReducerState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer,
  [QUESTION_STATE_NAME]: questionsReducer,
  router: routerReducer,
};
