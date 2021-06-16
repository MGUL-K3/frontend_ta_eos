import { Dispatch } from "redux";
import { authAction, authAPI, IAuth } from "../reducers/auth";

export const authorize = (user: IAuth) => {
  return (dispatch: Dispatch<authAction>) => {
    dispatch({ type: authAPI.AUTHORIZE, payload: user });
  };
};

export const logOut = () => {
  return (dispatch: Dispatch<authAction>) => {
    dispatch({ type: authAPI.LOG_OUT });
  };
};
