import { actionConstants } from '../../../types/actionConstants';

export const changeValue = action =>({
  type: actionConstants.TOP_MENU_VALUE_SUCCESS,
  value: action.value,
});
