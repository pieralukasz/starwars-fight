import {Dispatch} from "redux";
import {DispatchSetPoints, PointsType, RESET_POINTS, SET_POINTS} from "./PointsActionType";

export const setNewPoints = (points: PointsType) => (dispatch: Dispatch<DispatchSetPoints>) => {
  dispatch({
    type: SET_POINTS,
    payload: {...points}
  })
}

export const resetAllPoints = () => (dispatch: Dispatch<DispatchSetPoints>) => {
  dispatch({
    type: RESET_POINTS
  })
}
