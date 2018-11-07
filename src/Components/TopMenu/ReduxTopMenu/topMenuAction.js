import { topMenuConstants } from '../../../types/topMenuConstants';

export const changeValueAction = action =>({
  type: topMenuConstants.TOP_MENU_VALUE_SUCCESS,
  value: action.value,
});
