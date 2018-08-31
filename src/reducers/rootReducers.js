import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import walkingReducer from '../Animations/Walking/redux/walkingReducer';


export const appReducer = combineReducers({
  walking: walkingReducer,
});

export default appReducer;
