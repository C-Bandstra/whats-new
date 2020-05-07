import React from 'react';
import './NewsArticle.css';

// NEWSARTICLE COMPONENT CODE GOES HERE

const NewsArticle = (props) => {
  return (
    <article data-testid="article" className="article" key={props.info.id}>
      <img alt="" src={props.info.img}/>
      <h1>{props.info.headline}</h1>
      <p>{props.info.description}</p>
      <a href={props.info.url}>Link To Article
        <img className="arrow" src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png"/>
      </a>
    </article>
  )
}

export default NewsArticle;