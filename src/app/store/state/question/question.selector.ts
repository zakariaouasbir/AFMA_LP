import { createFeatureSelector, createSelector } from '@ngrx/store';
import { questionsAdapter, QuestionsState } from './question.state';

export const QUESTION_STATE_NAME = 'question';

const getQuestionsState = createFeatureSelector<QuestionsState>(QUESTION_STATE_NAME);

export const questionsSelectors = questionsAdapter.getSelectors();

export const getQuestions = createSelector(getQuestionsState, questionsSelectors.selectAll);

export const getQuestionEntities = createSelector(getQuestionsState, questionsSelectors.selectEntities);

export const getCount = createSelector(getQuestionsState, (state) => state.count);
