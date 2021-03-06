import React, { Component } from 'react'
import { robots } from './robots';
import CardList from './components/CardList';
import Searchbox from "./components/Searchbox";
export class App extends Component {
  state={
    robots,
    searchfield: ''
  }

  onSearchChange = (event) => {
    this.setState({
      searchfield: event.target.value
    });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 style={headerStyle} className="f1">RoboFriends</h1>
        <Searchbox search={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

const headerStyle = {
  fontWeight: '700',
  color: '#0ccac4'
}

export default App
