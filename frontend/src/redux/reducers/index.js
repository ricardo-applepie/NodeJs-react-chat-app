import { combineReducers } from "redux";

import auth from "./auth";
import userInfo from "./user";

export default combineReducers({ auth, userInfo });
