import { Set_User_Auth } from "./actionTypes";
import { Set_User_info } from "./actionTypes";



export const setUsername = username => ({
    type: Set_User_Auth,
    payload: {
        username
    }
});

export const setUserDetails = username => ({
    type: Set_User_info,
    payload: {
        username
    }
});


