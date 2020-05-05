import React from 'react';
import './Menu.css'
import NewsContainer from '../NewsContainer/NewsContainer'

const Menu = (props) => {
  const topicTitles = Object.keys(props.topics)
  const topicList = topicTitles.map(topic => {
    let properTitle = topic.charAt(0).toUpperCase() + topic.slice(1)
    return (
      <p onClick={<NewsContainer />}className="topic" key={topic}>{properTitle}</p>
    )
  });

  return (
    <section className="topic-container">
      <h1 className="title">What's <span className="span-title">New?</span></h1>
      <ul className="topic-list">
       {topicList}
      </ul>
    </section>
  )
}

export default Menu;