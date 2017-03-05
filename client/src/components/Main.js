import React, {Component} from 'react';

class Search extends Component {
  render() {
    return (
      <input type="search"/>
    )
  }
}

export default class Main extends Component {
  render() {
    return (
      <div className=''>
        <Search />
      </div>
    )
  }
}
