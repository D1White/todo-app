import { combineReducers } from 'redux';

import tasksReducer from './tasks';
import userReducer from './user';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  user: userReducer,
});

export default rootReducer;