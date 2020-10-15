import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {setSearchField,requestRobots} from "./actions/searchActions";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/Header";

const App = () => {
const dispatch = useDispatch();

const onSearchChange = (event) => dispatch(setSearchField(event.target.value));

useEffect(() => {
  dispatch(requestRobots())
}, [dispatch])

const robots = useSelector(state => state.requestRobots.robots || [])
const searchField = useSelector(state => state.searchRobots.searchField);
const isPending = useSelector(state => state.requestRobots.isPending);

const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
})


return isPending ? (
  <h1>Loading</h1>
) : (
  <div className="App tc">
    <Header />
    <SearchBox searchChange={onSearchChange} />
    <Scroll>
      <ErrorBoundary>
        <CardList robots={filteredRobots} />
      </ErrorBoundary>
    </Scroll>
  </div>
);
}

export default App;

