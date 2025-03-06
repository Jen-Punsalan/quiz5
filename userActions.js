// redux/actions/userActions.js
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginUser = (userData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    // Simulate API call
    setTimeout(() => {
      // Assuming login is successful
      dispatch({ type: LOGIN_SUCCESS, payload: userData });
    }, 2000);
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};
