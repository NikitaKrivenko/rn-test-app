import {combineReducers} from 'redux';
import user from './reducers/user';
import navigation from './reducers/navigation';
import stackOverflow from './reducers/stackOverflow';

export default reducer = combineReducers({
  user,
  navigation,
  stackOverflow
});
