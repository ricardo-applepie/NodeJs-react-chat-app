import { Set_User_Auth } from "../actionTypes";

const initialState = {
    auth: { auth: false},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case Set_User_Auth: {
           
            return {
                ...state,
                auth:true
            };
        }
      
        default:
            return state;
    }
}
