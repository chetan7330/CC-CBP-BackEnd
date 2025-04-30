import { server } from '../store';
import axios from 'axios';

// Login action
export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: 'loginRequest' });

    const { data } = await axios.post(
      `${server}/login`,
      { email, password },
      {
        withCredentials: true,
      }
    );

    console.log('Login response data:', data); // Debugging log
    dispatch({ type: 'loginSuccess', payload: data });
  } catch (error) {
    // Safeguard for undefined response
    const errorMessage = error?.response?.data?.message || 'An error occurred';
    console.error('Login error:', errorMessage); // Log the error for debugging
    dispatch({ type: 'loginFail', payload: errorMessage });
  }
};

// Register action
export const register = formdata => async dispatch => {
  try {
    dispatch({ type: 'registerRequest' });

    const { data } = await axios.post(`${server}/register`, formdata, {
      withCredentials: true,
    });

    console.log('Register response data:', data); // Debugging log
    dispatch({ type: 'registerSuccess', payload: data });
  } catch (error) {
    // Safeguard for undefined response
    const errorMessage = error?.response?.data?.message || 'An error occurred';
    console.error('Register error:', errorMessage); // Log the error for debugging
    dispatch({ type: 'registerFail', payload: errorMessage });
  }
};

// Load user action
export const loadUser = () => async dispatch => {
  try {
    dispatch({ type: 'loadUserRequest' });

    const { data } = await axios.get(`${server}/me`, { withCredentials: true });
    
    console.log('Load user response data:', data); // Debugging log
    dispatch({ type: 'loadUserSuccess', payload: data.user });
  } catch (error) {
    // Safeguard for undefined response
    const errorMessage = error?.response?.data?.message || 'An error occurred';
    console.error('Load user error:', errorMessage); // Log the error for debugging
    dispatch({ type: 'loadUserFail', payload: errorMessage });
  }
};

// Logout action
export const logout = () => async dispatch => {
  try {
    dispatch({ type: 'logoutRequest' });

    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });

    console.log('Logout response data:', data); // Debugging log
    dispatch({ type: 'logoutSuccess', payload: data.message });
  } catch (error) {
    // Safeguard for undefined response
    const errorMessage = error?.response?.data?.message || 'An error occurred';
    console.error('Logout error:', errorMessage); // Log the error for debugging
    dispatch({ type: 'logoutFail', payload: errorMessage });
  }
};

// Buy subscription action
export const buySubscription = () => async dispatch => {
  try {
    dispatch({ type: 'buySubscriptionRequest' });

    const { data } = await axios.get(`${server}/subscribe`, {
      withCredentials: true,
    });

    console.log('Buy subscription response data:', data); // Debugging log
    dispatch({ type: 'buySubscriptionSuccess', payload: data.subscriptionId });
  } catch (error) {
    // Safeguard for undefined response
    const errorMessage = error?.response?.data?.message || 'An error occurred';
    console.error('Buy subscription error:', errorMessage); // Log the error for debugging
    dispatch({
      type: 'buySubscriptionFail',
      payload: errorMessage,
    });
  }
};

// Cancel subscription action
export const cancelSubscription = () => async dispatch => {
  try {
    dispatch({ type: 'cancelSubscriptionRequest' });

    const { data } = await axios.delete(`${server}/subscribe/cancel`, {
      withCredentials: true,
    });

    console.log('Cancel subscription response data:', data); // Debugging log
    dispatch({ type: 'cancelSubscriptionSuccess', payload: data.message });
  } catch (error) {
    // Safeguard for undefined response
    const errorMessage = error?.response?.data?.message || 'An error occurred';
    console.error('Cancel subscription error:', errorMessage); // Log the error for debugging
    dispatch({
      type: 'cancelSubscriptionFail',
      payload: errorMessage,
    });
  }
};
