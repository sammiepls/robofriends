import React, { Component } from "react";

import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import ErrorBoundry from "./ErrorBoundary";
import Header from "./Header";

export class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    const { robots, searchField } = this.props;
    return robots.filter((robot) =>  robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
  };

  render() {
    const { onSearchChange, isPending } = this.props;

    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? (
            <h1>Loading</h1>
          ) : (
            <ErrorBoundry>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundry>
          )}
        </Scroll>
      </div>
    );
  }
}

export default MainPage;

// Hooks
// import React, {useEffect} from "react";
// import CardList from "./CardList";
// import SearchBox from "./SearchBox";
// import Scroll from "./Scroll";
// import ErrorBoundary from "./ErrorBoundary";
// import Header from "./Header";
// import "../MainPage.css";

// const MainPage = ({ dispatchRequestRobots, robots, onSearchChange, searchField, isPending }) => {

//   useEffect(() => {
//     if (robots.length > 0) return;
//     dispatchRequestRobots();
//   }, [dispatchRequestRobots, robots]);

//   const filteredRobots = robots.filter((robot) => {
//     return robot.name.toLowerCase().includes(searchField.toLowerCase());
//   });

//   return (
//     <div className="App tc">
//       <Header />
//       <SearchBox searchChange={onSearchChange} />
//       <Scroll>
//         {isPending ? (
//           "Is Loading"
//         ) : (
//           <ErrorBoundary>
//             <CardList robots={filteredRobots} />
//           </ErrorBoundary>
//         )}
//       </Scroll>
//     </div>
//   );
// };


// export default MainPage;
