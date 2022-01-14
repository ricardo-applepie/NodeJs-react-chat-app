import { Set_User_info } from '../actionTypes';

const initialState = {
  username: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case Set_User_info: {
      return {
        ...state,
        username: action.payload,
      };
    }

    default:
      return state;
  }
}
