import React from "react";
import CounterButton from "./CounterButton"

const Header = () => {
  return <><h1>Robofriends</h1><CounterButton/></>};

// class Header extends React.Component {

//   shouldComponentUpdate(nextProps, nextState) {
//     return false;
//   }

//   render() {
//     console.log("Header")
//   return <><h1>Robofriends</h1>
//   <CounterButton/>
//   </>};
// }

export default React.memo(Header);
