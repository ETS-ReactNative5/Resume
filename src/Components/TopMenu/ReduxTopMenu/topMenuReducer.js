import { topMenuConstants } from '../../../types/topMenuConstants';
import { updateObject } from '../../../helpers/objectHelper';

const initialState = {
};
const changeValue = (state, action) => updateObject(state, {value: action.value});

const topMenuReducer = (state = initialState, action) => {
  switch (action.type) {
  case topMenuConstants.TOP_MENU_VALUE_SUCCESS:
    console.log('topMenu REduecr !!!!')
    return changeValue(state, action);
  default:
    return state;
  }
};

export default topMenuReducer;
