import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { BlogProvider } from './state/BlogProvider';

render(
  <BlogProvider store={store}>
    <App />
  </BlogProvider>,
  document.getElementById('root')
);
