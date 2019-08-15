import React, { Component } from 'react'

export class Searchbox extends Component {
  render() {
    return (
      <div className='pa2'>
        <input 
          className='pa3 ba b--green bg-lightest-blue'
          type='search' 
          placeholder='search robots' 
        />
      </div>
    )
  }
}

export default Searchbox
