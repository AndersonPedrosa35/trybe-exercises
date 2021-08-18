import React from 'react'
import renderWithRedux from './renderWithRedux';
import { cleanup, fireEvent } from '@testing-library/react';
import App from '../App';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />, { InitialState: { clickReducer: { counter: 5 }}});

    expect(queryByText('5')).toBeInTheDocument();
  });

  test('The page starts in 10', () => {
    const { queryByText } = renderWithRedux(<App />, { InitialState: { clickReducer: { counter: 10 }}});
    const buttonAdicionar = queryByText('Clique aqui');

    fireEvent.click(buttonAdicionar);

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('11')).toBeInTheDocument();
  });
});