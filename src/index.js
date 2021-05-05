import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PlaceHolder from './Components/Name-Holder';

ReactDOM.render(
  <React.StrictMode>
    <PlaceHolder name='Enter Name Here' />
  </React.StrictMode>,
  document.getElementById('root')
);
