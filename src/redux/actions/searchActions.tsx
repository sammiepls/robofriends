import ACTION_TYPES from "./types";

export interface SetSearchFieldAction {
  type: ACTION_TYPES.CHANGE_SEARCHFIELD;
  payload: string;
}

export const setSearchField = (text: string): SetSearchFieldAction => ({ type: ACTION_TYPES.CHANGE_SEARCHFIELD, payload: text });
