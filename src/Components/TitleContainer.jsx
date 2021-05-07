import React from 'react';
import Placeholder from './ValuePlaceholder';
import './TitleContainer.css';

class TitleContainer extends React.Component {
  render() {
    return (
      <div className='title-container'>
        <div className='name'>
          <Placeholder name='Your Name' className='heading' />
        </div>
        <div className='contact-details'>
          <Placeholder name='Telephone' />
          <Placeholder name='Email' />
          <Placeholder name='Website' />
        </div>
      </div>
    );
  }
}

export default TitleContainer;
