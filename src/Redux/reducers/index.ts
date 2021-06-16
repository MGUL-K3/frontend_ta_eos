import { combineReducers } from "redux";
import timing from "./timing";
import auth from "./auth";

export const rootReducer = combineReducers({
  timing,
  auth
});

export type RootState = ReturnType<typeof rootReducer>;
