import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  NETWORK_ERROR,
  ADD_SMURF_SUCESS,
} from '../actions';

const initialState = {
  smurfs: [],
  isLoading: false,
  error: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return { ...state, isLoading: true };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false,
      };
    case NETWORK_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case ADD_SMURF_SUCESS:
      return { ...state, smurfs: action.payload };
    default:
      return state;
  }
};
