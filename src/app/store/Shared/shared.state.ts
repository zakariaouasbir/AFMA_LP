export interface SharedState {
  showLoading: boolean;
  errorMessage: string;
  succesMessage: string;
}

export const initialState: SharedState = {
  showLoading: false,
  errorMessage: '',
  succesMessage: '',
};
