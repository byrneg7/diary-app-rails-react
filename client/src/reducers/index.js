import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import modalReducer from './modalReducer'
import userReducer from './userReducer'

export default combineReducers({
  modal: modalReducer,
  form: formReducer,
  user: userReducer,
})