export const SET_POINTS = "SET_POINTS"

export interface PointsType {
  firstPlayerWin: boolean,
  secondPlayerWin: boolean
}

export interface SetPoints {
  type: typeof SET_POINTS,
  payload: PointsType
}

export type DispatchSetPoints = SetPoints
