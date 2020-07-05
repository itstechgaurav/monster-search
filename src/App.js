import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {CardList} from './components/card-lists/card-list';
import {SearchField} from './components/search-field/search-field'


class App extends Component {

  constructor() {

    super();

    this.state = {
      monsters: [],
      filteredList: [],
      searchString: ''
    }

  }

  async componentDidMount() {
    const fetchResult = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await fetchResult.json();
    users.forEach(it => it.preetyName = it.name);
    this.setState({ monsters: users }, this.filterMylist);
  }

  filterMylist() {
    const { searchString, monsters } = this.state;
    if(searchString.length) {
      const filteredResult = monsters.filter(it => {
        const res = it.name.toLowerCase().indexOf(searchString.toLowerCase());
        let finalResult = res >= 0;

        if(finalResult) {
          it.preetyName = `${it.name.slice(0, res)}<span class='highlight'>${it.name.slice(res, searchString.length + res)}</span>${it.name.slice(searchString.length + res)}`;
        } else it.preetyName = it.name;
        return finalResult;
      })
      this.setState({ filteredList: filteredResult });
    } else {
      monsters.forEach(it => it.preetyName = it.name);
      this.setState({ filteredList: monsters })
    }
  }

  handleChanges = e => {
    this.setState({ 
      searchString: e.target.value.trim() 
    }, this.filterMylist);
  }

  render() {
    return (
      <div className="App">
        <h1 className="appTitle">
          Monster Search
        </h1>
        <SearchField placeholder="Search" handler={this.handleChanges}/>

        <CardList monsters={this.state.filteredList}></CardList>

        {
          !this.state.filteredList.length &&
          <h2>
            Nothing Found
          </h2>
        }

      </div>
    );
  }

}


export default App;
