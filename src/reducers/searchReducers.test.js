import { CHANGE_SEARCHFIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from "../constants";

import * as reducers from "./searchReducer";

describe('searchRobots', () => {
  const initialStateSearch = {
    searchField: ''
  }

  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual(initialStateSearch)
  })

  it('should handle the CHANGE_SEARCHFIELD', () => {
    expect(reducers.searchRobots(initialStateSearch, {type: CHANGE_SEARCHFIELD, payload: "Alice"})).toEqual({
      searchField: 'Alice'
    })
  })
})

describe('requestRobots', () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: "",
  };

  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  })

  it('should handle REQUEST_ROBOTS_PENDING ', () => {
    expect(reducers.requestRobots(initialStateRobots, {type: REQUEST_ROBOTS_PENDING})).toEqual({ isPending: true, robots: [], error: "" });
  })

  it('should handle REQUEST_ROBOTS_ERROR ', () => {
    expect(reducers.requestRobots(initialStateRobots, { type: REQUEST_ROBOTS_FAILED, payload:"Fetch error" })).toEqual({
      isPending: false,
      robots: [],
      error: "Fetch error",
    });
  })

  it("should handle REQUEST_ROBOTS_SUCCESS ", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [{ id: 1, name: "John", email: "john@gmail.com" }],
      })
    ).toEqual({
      isPending: false,
      robots: [{ id: 1, name: "John", email: "john@gmail.com" }],
      error: "",
    });
  });
})
