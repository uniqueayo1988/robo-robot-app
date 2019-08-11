import React, { Component } from 'react'
import { robots } from './robots'

export class Card extends Component {
  render() {
  console.log(robots, "...robots");
  console.log(this.props, "...robo props");
    const {id, name, email} = this.props
    return (
      <div className="tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow">
        <img src={`https://robohash.org/${id}?200x200`} alt="robo-friend" />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card
