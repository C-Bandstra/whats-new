import React, { Component } from 'react';
import local from '../../data/local';
import technology from '../../data/technology';
import entertainment from '../../data/entertainment';
import science from '../../data/science';
import health from '../../data/health';
import './App.css';
import Menu from '../Menu/Menu'
import SearchForm from '../SearchForm/SearchForm'
import NewsContainer from '../NewsContainer/NewsContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      allArticles: {local, technology, entertainment, science, health},
      selected: 'local',
      results: []
    }
  }

  search = (value) => {
    let results = this.state.allArticles[this.state.selected].filter(article => article.headline.includes(value))
    this.setState({results: results})
  }

  updateSelected = (e) => {
    const selected = e.target.id;
    this.setState({selected: selected});
    this.setState({results: []});
  }

  render = () => {
    return (
      <div className="app">
        <Menu selectTopic={this.updateSelected} topics={this.state.allArticles}/>
        <section className="right-main">
          <SearchForm search={this.search}/>
          <NewsContainer 
            articles={this.state.allArticles[this.state.selected]}
            results={this.state.results}
          />
        </section>
      </div>
    );
  }
}

export default App;
