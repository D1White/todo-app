import { combineReducers } from 'redux';

import tasksReducer from './tasks';
import userReducer from './user';
import listsReducer from './lists';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  user: userReducer,
  lists: listsReducer,
});

export default rootReducer;