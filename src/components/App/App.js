import React, { Component } from 'react';
import local from '../../data/local';
import technology from '../../data/technology';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import health from '../../data/health';
import './App.css';
import Menu from '../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm'

class App extends Component {
  constructor() {
    super();
    this.state = {
      allArticles: {local, technology, entertainment, science, health},
      selected: local,
    }
  }

  updateSelected(topic) {
    this.setState({selected: topic})
  }

  render () {
    return (
      <div className="app">
        <Menu topics={this.state.allArticles}/>
        <SearchForm />
      </div>
    );
  }
}

export default App;
