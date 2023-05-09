import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { IQuestion } from './question.model';

export interface QuestionsState extends EntityState<IQuestion> {
  count: number;
}

export const questionsAdapter = createEntityAdapter<IQuestion>({
  selectId: (question: IQuestion) => question.id,
});

export const initialState: QuestionsState = questionsAdapter.getInitialState({
  count: 0,
});
