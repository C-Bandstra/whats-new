import React, { Component } from 'react';
import './SearchForm.css';

// SEARCHFORM COMPONENT CODE GOES HERE

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.search(this.state.value)
  }

  render() {
    return (
      <header className="main-header">
        <input onChange={this.handleChange} className="search-input" type="search" placeholder="search"></input>
        <button onClick={this.handleSubmit} className="search-btn">Search Now</button>
      </header>
    )
  }
}






export default SearchForm;