import { combineReducers } from "redux";
import timing from "./timing";
import auth from "./auth";
import modal from "./modal";
import inside from "./inside";

export const rootReducer = combineReducers({
  timing,
  auth,
  modal,
  inside
});

export type RootState = ReturnType<typeof rootReducer>;
