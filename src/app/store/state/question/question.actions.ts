import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { IQuestion } from './question.model';

export const ADD_QUESTION_ACTION = '[questions page] add question';
export const ADD_QUESTIONS_SUCCESS = '[questions page] add question success';
export const ADD_QUESTIONS_FAILED = '[questions page] add question success';

export const UPDATE_QUESTION_ACTION = '[questions page] update question';
export const UPDATE_QUESTION_SUCCESS = '[questions page] update question success';
export const UPDATE_QUESTION_FAILED = '[questions page] update question failed';

export const DELETE_QUESTION_ACTION = '[questions page] delete question';
export const DELETE_QUESTION_SUCCESS = '[questions page] delete question success';
export const DELETE_QUESTION_FAILED = '[questions page] delete question failed';

export const LOAD_QUESTIONS = '[questions page] load questions';
export const LOAD_QUESTIONS_SUCCESS = '[questions page] load questions success';
export const LOAD_QUESTIONS_FAILED = '[questions page] load questions failed';

export const addQuestion = createAction(ADD_QUESTION_ACTION, props<{ question: IQuestion }>());

export const addQuestionSuccess = createAction(ADD_QUESTIONS_SUCCESS, props<{ question: IQuestion }>());
export const addQuestionFailed = createAction(ADD_QUESTIONS_FAILED, props<{ errorMessage: string }>());

export const updateQuestion = createAction(UPDATE_QUESTION_ACTION, props<{ question: IQuestion }>());
export const updateQuestionSuccess = createAction(UPDATE_QUESTION_SUCCESS, props<{ question: Update<IQuestion> }>());
export const updateQuestionFailed = createAction(UPDATE_QUESTION_SUCCESS, props<{ errorMessage: string }>());

export const deleteQuestion = createAction(DELETE_QUESTION_ACTION, props<{ id: string }>());
export const deleteQuestionSuccess = createAction(DELETE_QUESTION_SUCCESS, props<{ id: string }>());
export const deleteQuestionFailed = createAction(DELETE_QUESTION_SUCCESS, props<{ errorMessage: string }>());

export const loadQuestions = createAction(LOAD_QUESTIONS);
export const loadQuestionsSuccess = createAction(LOAD_QUESTIONS_SUCCESS, props<{ questions: IQuestion[] }>());
export const loadQuestionsFailed = createAction(LOAD_QUESTIONS_FAILED, props<{ errorMessage: string }>());
