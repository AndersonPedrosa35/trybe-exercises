// src/helper/index.js
import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import clickReducer from '../reducers';

const createMockStore = (initialState) => (
  createStore(combineReducers({ clickReducer }), initialState, applyMiddleware(thunk))
);

const renderWithRedux = (
  component, { InitialState, store = createMockStore(InitialState) } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store});

export default renderWithRedux;