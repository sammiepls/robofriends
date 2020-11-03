import React, { Component } from "react";
import { connect } from "react-redux";
import {setSearchField,requestRobots} from "./actions/searchActions";

import MainPage from "./components/MainPage";

import "./App.css";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// Hooks
// import React from "react";
// import {useSelector, useDispatch} from "react-redux";
// import {setSearchField, requestRobots} from "./actions/searchActions";
// import MainPage from "./components/MainPage";

// const App = () => {
// const dispatch = useDispatch();

// const onSearchChange = (event) => dispatch(setSearchField(event.target.value));

// const robots = useSelector((state) => state.requestRobots.robots || []);
// const searchField = useSelector((state) => state.searchRobots.searchField);
// const isPending = useSelector((state) => state.requestRobots.isPending);


// return (
//   <MainPage {...{ robots, searchField, isPending, onSearchChange,
//     dispatchRequestRobots: () => dispatch(requestRobots()) }} />
// );
// }

// export default App;

