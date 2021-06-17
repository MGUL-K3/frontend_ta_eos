enum insideAPI {
  INSIDE = "INSIDE",
  NOT_INSIDE = "NOT_INSIDE",
}

export interface IInside {
  inside: boolean;
}

const initialState: IInside = {
  inside: false,
};

export type insideAction = {
  type: insideAPI;
};

export default function auth(
  state: IInside = initialState,
  action: insideAction
) {
  switch (action.type) {
    case insideAPI.INSIDE:
      return { inside: true } as IInside;
    case insideAPI.NOT_INSIDE:
      return { inside: false } as IInside;
    default:
      return state;
  }
}

export { insideAPI };
