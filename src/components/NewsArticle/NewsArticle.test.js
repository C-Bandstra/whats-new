import React from 'react';
import { render } from '@testing-library/react';
import NewsArticle from './NewsArticle';
import '@testing-library/jest-dom';

describe('News Article', () => {

  const articleData = {
    id: 1,
    headline: 'The Who postpones Denver',
    img: 'https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg',
    description: 'Classic-rock band The Who has postponed',
    url: 'https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/'
  }

  it('renders without crashing', () => {
    render(<NewsArticle info={articleData}/>)
  })

  it('should display with info we expect', () => {
    const { getByText } = render(<NewsArticle info={articleData}/>)

    expect(getByText('The Who postpones Denver')).toBeInTheDocument();
    expect(getByText('Classic-rock band The Who has postponed')).toBeInTheDocument();
  })
})