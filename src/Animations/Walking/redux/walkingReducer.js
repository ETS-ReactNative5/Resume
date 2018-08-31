import { actionConstants } from '../../../types/actionConstants';
import { updateObject } from '../../../helpers/objectHelper';

const initialState = {
  walking: null,
};

const changeImg0 = (state, action) => updateObject(state, {img0: action.img0});

const walkingReducer = (state = initialState, action) => {
  switch (action.type) {
  case actionConstants.WALKING_FIGURE_SET_IMG0:
    return changeImg0(state, action);
  default:
    return state;
  }
};

export default walkingReducer;
