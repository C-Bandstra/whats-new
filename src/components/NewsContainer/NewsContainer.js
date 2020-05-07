import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

// NEWSCONTAINER COMPONENT CODE GOES HERE

const NewsContainer = (props) => {
  let arr = props.articles
  if(props.results.length) {
    arr = props.results
  }
  
  let articles = arr.map(article => {
    return (
      <NewsArticle key={article.id.toString()} info={article}/>
    )
  })

  return (
    <section className="news-container" key={props}>
      {articles} 
    </section>
  )
}

export default NewsContainer;