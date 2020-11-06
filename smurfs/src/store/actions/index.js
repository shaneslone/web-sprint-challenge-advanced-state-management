import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const NETWORK_ERROR = 'NETWORK_ERROR';
export const ADD_SMURF_SUCESS = 'ADD_SMURF_SUCCESS';

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({ type: FETCH_SMURFS_START });

    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: NETWORK_ERROR, payload: err.message });
      });
  };
};

export const addSmurf = smurf => {
  return dispatch => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        dispatch({ type: ADD_SMURF_SUCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: NETWORK_ERROR, payload: err.message });
      });
  };
};
