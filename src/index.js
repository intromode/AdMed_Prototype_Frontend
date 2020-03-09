import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

//eventually import Provider and store so each component has access to the store

render(
  <App />,
  document.getElementById('root')
);
