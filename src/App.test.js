import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App store={{
    dispatch: () => {},
    subscribe: () => {},
    getState: () => {}
  }}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
