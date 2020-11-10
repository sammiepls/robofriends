import ACTION_TYPES from 'redux/actions/types'
import {SetSearchFieldAction} from 'redux/actions/searchActions'

interface StateSearch {
  searchField: string;
}

const initialStateSearch : StateSearch = {
  searchField: ''
}

export const searchRobots  = (state:StateSearch = initialStateSearch, action:SetSearchFieldAction) => {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_SEARCHFIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};


