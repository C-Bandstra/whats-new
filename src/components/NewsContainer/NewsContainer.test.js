import React from 'react';
import { render } from '@testing-library/react';
import NewsContainer from './NewsContainer';
import '@testing-library/jest-dom';

describe('News Container', () => {

  const data = {
    id: 1,
    headline: 'The',
    img: 'https',
    description: 'Classic-rock',
    url: 'https://'
  }

  it('Should render without crashing', () => {
    render(<NewsContainer articles={[data]} results={[]}/>)
  })

  it('Should render a container for the articles', () => {
    const { container } = render(<NewsContainer articles={[data]} results={[]}/>);
    const newsContainer = container.firstChild;
    expect(newsContainer).toHaveClass('news-container');
    expect(newsContainer).toBeInTheDocument();
  })
})