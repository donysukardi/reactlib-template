import React from 'react';
import ReactDOM from 'react-dom';
import ExampleComponent from '../index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ExampleComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
