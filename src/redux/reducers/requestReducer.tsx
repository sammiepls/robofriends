import ACTION_TYPES from "redux/actions/types";
import { Robot, RequestRobotAction } from "redux/actions/requestActions";

interface StateRobots {
  isPending: boolean;
  robots: Robot[];
  error: string;
}

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: "",
};

export const requestRobots = (state: StateRobots = initialStateRobots, action: RequestRobotAction) => {
  switch (action.type) {
    case ACTION_TYPES.REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true };
    case ACTION_TYPES.REQUEST_ROBOTS_SUCCESS:
      return { ...state, isPending: false, robots: action.payload };
    case ACTION_TYPES.REQUEST_ROBOTS_FAILED:
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};
