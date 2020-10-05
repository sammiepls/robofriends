import React from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import ErrorBoundary from "./components/ErrorBoundary";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots:[],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(resp => resp.json()).then(users => {
      this.setState({robots:users})
    })
  }

  onSearchChange = (event) => {
    this.setState({
      searchfield: event.target.value,
    })
  };

  render() {
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="App tc">
        <h1>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
