import React, { Component } from 'react'

export class Searchbox extends Component {
  onChan
  render() {
    const {search} = this.props
    return (
      <div className='pa2'>
        <input 
          onChange={search}
          className='pa3 ba b--green bg-lightest-blue'
          type='search' 
          placeholder='search robots' 
        />
      </div>
    )
  }
}

export default Searchbox
