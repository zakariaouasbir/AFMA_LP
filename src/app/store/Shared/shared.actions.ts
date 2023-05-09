import { createAction, props } from '@ngrx/store';
export const SET_LOADING_ACTION = '[shared state] set loading spinner';
export const SET_ERROR_MESSAGE = '[shared state] set error message';
export const SET_SUCCESS_MESSAGE = '[shared state] set success message';

export const setLoadingSpinner = createAction(SET_LOADING_ACTION, props<{ status: boolean }>());

export const setErrorMessage = createAction(SET_ERROR_MESSAGE, props<{ message: string }>());

export const setSuccesMessage = createAction(SET_SUCCESS_MESSAGE, props<{ message: string }>());
