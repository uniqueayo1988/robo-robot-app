import React, { Component } from 'react'
import { robots } from './robots';
import CardList from './components/CardList';
import Searchbox from "./components/Searchbox";
export class App extends Component {
  state={
    robots: []
  }
  
  componentDidMount () {
    this.setState({
      robots
    })
  }
  render() {
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <Searchbox />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App
