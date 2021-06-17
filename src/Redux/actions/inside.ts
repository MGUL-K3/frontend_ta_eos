import { Dispatch } from "redux";
import URLS from "../../config/urls";
import { insideAction, insideAPI } from "../reducers/inside";

export const isInside = () => {
  return (dispatch: Dispatch<insideAction>) => {
    fetch(URLS.inside).then((res) => {
      if (res.status !== 400) {
        dispatch({type: insideAPI.INSIDE})
      } else {
        dispatch({type: insideAPI.NOT_INSIDE})
      }
    })
  };
};
