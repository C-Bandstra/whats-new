import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Menu from './Menu';
import '@testing-library/jest-dom';

describe('Menu', ()=> {
  const mockUpdateSelected = jest.fn()

  it('should render without crashing', () => {
    render(<Menu selectTopic={mockUpdateSelected} topics={{'local': 'local', 'science': 'science', 'health': 'health'}}/>)
  })

  it('Should have a title', () => {
    const { getByText } = render(<Menu selectTopic={mockUpdateSelected} topics={{'local': 'local', 'science': 'science', 'health': 'health'}}/>)
    const menu = getByText('What\'s')
    expect(menu).toBeInTheDocument();
  })

  it('Should be able to change the selected articles', () => {
    const { getByText } = render(<Menu selectTopic={mockUpdateSelected} topics={{'local': 'local', 'science': 'science', 'health': 'health'}}/>);
    const healthBtn = getByText('Health')
    fireEvent.click(healthBtn)
    expect(mockUpdateSelected).toHaveBeenCalled();
  })
})