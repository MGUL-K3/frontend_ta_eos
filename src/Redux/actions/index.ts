import * as timingActions from "./timing";
import * as authActions from "./auth";
import * as modalAction from "./modal";
import * as insideAction from "./inside";

export default {
  ...timingActions,
  ...authActions,
  ...modalAction,
  ...insideAction
};
