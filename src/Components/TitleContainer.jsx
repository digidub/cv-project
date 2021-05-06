import React from 'react';
import Placeholder from './ValuePlaceholder';

class TitleContainer extends React.Component {
  render() {
    return (
      <div>
        <Placeholder name='Enter Name Here' />
        <Placeholder name='Telephone Number' />
        <Placeholder name='Email' />
        <Placeholder name='Website' />
      </div>
    );
  }
}

export default TitleContainer;
