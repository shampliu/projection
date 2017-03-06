import React, {Component} from 'react';
import Api from './Api';

class SearchBar extends Component {
  componentDidMount() {
    Api.search('ChEck')

  }

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
        <SearchBar />
      </div>
    )
  }
}
