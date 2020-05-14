import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchForm from './SearchForm';
import '@testing-library/jest-dom';

describe('Search Form', () => {

  const mockSearch = jest.fn();

  it('renders without crashing', () => {
    render(<SearchForm search={mockSearch}/>)
  })

  it('Should be able to display search input', () => {
    const { getByPlaceholderText } = render(<SearchForm search={mockSearch}/>);
    const searchInput = getByPlaceholderText('search');
    expect(searchInput).toBeInTheDocument();
  })

  it('Should be able to fill the search input', () => {
    const { getByPlaceholderText } = render(<SearchForm search={mockSearch}/>);
    const searchInput = getByPlaceholderText('search');
    fireEvent.change(searchInput, {target: {value: 'I am changed'}})
    expect(searchInput.value).toEqual('I am changed')
  })

  it('Should be able to click the search button', () => {
    const { getByText, getByPlaceholderText } = render(<SearchForm search={mockSearch}/>);
    const searchButton = getByText('Search Now');
    const searchInput = getByPlaceholderText('search');
    fireEvent.change(searchInput, {target: {value: 'I am changed'}})
    fireEvent.click(searchButton);
    expect(mockSearch).toHaveBeenCalledWith(searchInput.value)
  })
})