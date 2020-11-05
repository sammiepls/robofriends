import { CHANGE_SEARCHFIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED } from "../constants";
import * as actions from './searchActions'
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import fetchMock from "fetch-mock";
const mockStore = configureStore([thunkMiddleware]);


describe("setSearchField", () => {
  it('should create an action to search robots', () => {
    const text = 'robot'
    const expectedAction = {
      type: CHANGE_SEARCHFIELD,
      payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction)
  })
});

describe("requestRobots", () => {
  const store = mockStore({});
  fetchMock.config.overwriteRoutes = false;

  beforeEach(() => {
    fetchMock.restore();
    store.clearActions();
  })

  it('handles requesting robots API', () => {
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING
    };
    store.dispatch(actions.requestRobots())
    const action = store.getActions()
    expect(action[0]).toEqual(expectedAction)
  })

  it("handles successful API request", () => {
    const user = { id: 1, name: "john", email: "john@gmail.com" };

    const expectedAction = {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [user]
    };

    fetchMock.mock("https://jsonplaceholder.typicode.com/users", {
      body: [user],
      headers: { "content-type": "application/json" },
    });

    store.dispatch(actions.requestRobots()).then(() => {
      expect(store.getActions()[1]).toEqual(expectedAction)
    })
  })

  it("handles failed API request", () => {

    const expectedAction = {
      type: REQUEST_ROBOTS_FAILED,
      payload: new Error("Fetch failed")
    };

    fetchMock.mock("https://jsonplaceholder.typicode.com/users", () => {
      throw new Error("Fetch failed")
    });

    store.dispatch(actions.requestRobots()).then(() => {
      expect(store.getActions()[1]).toEqual(expectedAction)
    })

  })

})
