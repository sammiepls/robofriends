import React from "react";
import { shallow } from "enzyme";
import MainPage from "./MainPage";

describe("test MainPage", () => {
  let wrapper;
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };

  beforeEach(() => {
    wrapper = shallow(<MainPage {...mockProps} />);
  });

  it("should render the App component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("filters robots correctly", () => {
    const mockProps2 = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: "John",
          email: "john@gmail.com",
        },
        {
          id: 4,
          name: "Alice",
          email: "alice@gmail.com",
        },
      ],
      searchField: "a",
      isPending: false,
    };
    const wrapper2 = shallow(<MainPage {...mockProps2}/>)
    expect(wrapper2.instance().filterRobots()).toEqual([
      {
        id: 4,
        name: "Alice",
        email: "alice@gmail.com",
      },
    ]);
  })
});
