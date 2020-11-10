import ACTION_TYPES from "./types";
import {Dispatch} from 'redux';

export interface Robot {
  id: string;
  name: string;
  email: string;
}

export interface RequestRobotPendingAction {
  type: ACTION_TYPES.REQUEST_ROBOTS_PENDING;
}

export interface RequestRobotSuccessAction {
  type: ACTION_TYPES.REQUEST_ROBOTS_SUCCESS;
  payload: Robot[];
}

export interface RequestRobotFailedAction {
  type: ACTION_TYPES.REQUEST_ROBOTS_FAILED;
  payload: string;
}

export type RequestRobotAction = RequestRobotPendingAction | RequestRobotSuccessAction |RequestRobotFailedAction

export const requestRobots = () => (dispatch: Dispatch) => {
  dispatch<RequestRobotPendingAction>({ type: ACTION_TYPES.REQUEST_ROBOTS_PENDING });
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp) => resp.json())
    .then((users) => {
      return dispatch<RequestRobotSuccessAction>({ type: ACTION_TYPES.REQUEST_ROBOTS_SUCCESS, payload: users });
    })
    .catch((err) => dispatch<RequestRobotFailedAction>({ type: ACTION_TYPES.REQUEST_ROBOTS_FAILED, payload: err }));
};
