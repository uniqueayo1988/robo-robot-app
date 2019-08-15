import React from 'react'
import Card from "./Card";
// import { robots } from './robots'

export default function CardList({robots}) {
  const cardArray = robots.map(robot => (
    <Card 
      key={robot.id} 
      name={robot.name} 
      email={robot.email} 
      id={robot.id} 
    />
  ));
  return (
    <div>
      {cardArray}
    </div>
  );
}
