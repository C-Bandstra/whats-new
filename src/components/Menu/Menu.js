import React from 'react';
import './Menu.css'

const Menu = (props) => {
  const topicTitles = Object.keys(props.topics)
  const topicsToRender = topicTitles.map(topic => {
    let properTitle = topic.charAt(0).toUpperCase() + topic.slice(1)
    return (
      <button autoFocus={true} onClick={props.selectTopic} className="topic" id={topic} key={topic}>{properTitle}</button>
    )
  });

  return (
    <section className="topic-container">
      <h1 className="title">What's <span className="span-title">New?</span></h1>
      <ul className="topic-list">
       {topicsToRender}
      </ul>
    </section>
  )
}

export default Menu;