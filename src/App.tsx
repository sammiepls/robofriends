// import React, { Component } from "react";
// import { connect } from "react-redux";
// import {setSearchField} from "redux/actions/searchActions";
// import { requestRobots } from "redux/actions/requestActions";

// import MainPage from "components/MainPage";

// import "./App.css";

// const mapStateToProps = (state) => {
//   return {
//     searchField: state.searchRobots.searchField,
//     robots: state.requestRobots.robots,
//     isPending: state.requestRobots.isPending,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
//     onRequestRobots: () => dispatch(requestRobots()),
//   };
// };

// class App extends Component {
//   render() {
//     return <MainPage {...this.props} />;
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

// Hooks
import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {setSearchField} from "redux/actions/searchActions";
import {requestRobots, Robot} from "redux/actions/requestActions";
import MainPage from "./components/MainPage";

interface AppState {
  requestRobots: {
    robots: Robot[],
    isPending: boolean,
  };
  searchRobots: {searchField: string}
}

const App:React.FC<AppState> = () => {
const dispatch = useDispatch();

const onSearchChange = (event: React.SyntheticEvent<HTMLInputElement>) => dispatch(setSearchField(event.target.value));

const {robots, isPending} = useSelector((state:AppState) => state.requestRobots);
const {searchField} = useSelector((state:AppState) => state.searchRobots);


return (
  <MainPage {...{ robots, searchField, isPending, onSearchChange,
    dispatchRequestRobots: () => dispatch(requestRobots()) }} />
);
}

export default App;

