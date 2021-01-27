import {Dispatch} from "redux";
import {DispatchSetPoints, PointsType, SET_POINTS} from "./PointsActionType";

export const setNewPoints = (points: PointsType) => (dispatch: Dispatch<DispatchSetPoints>) => {
  dispatch({
    type: SET_POINTS,
    payload: {...points}
  })
}
