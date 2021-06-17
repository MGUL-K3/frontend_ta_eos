enum authAPI {
  AUTHORIZE = "AUTHORIZE",
  LOG_OUT = "LOG_OUT"
}

export interface IAuth {
  id: number | null;
  email: string;
  name: string;
  surname: string;
  patronymic: string;
  group: string;
  token: string | null;
}

const initialState: null = null;

type authorize = {
  type: authAPI.AUTHORIZE;
  payload: IAuth;
};

type logOut = {
  type: authAPI.LOG_OUT;
};

export type authAction = authorize | logOut;

export default function auth(
  state: IAuth | null = initialState,
  action: authAction
) {
  switch (action.type) {
    case authAPI.AUTHORIZE:
      return action.payload;
    case authAPI.LOG_OUT:
      return null;
    default:
      return state;
  }
}

export { authAPI };
