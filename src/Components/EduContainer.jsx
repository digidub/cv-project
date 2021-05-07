import React from 'react';
import Placeholder from './ValuePlaceholder';

class EduContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { skills: [] };
  }

  render() {
    return (
      <div>
        <Placeholder name='Enter Qualification Name' />
        <Placeholder name='Enter Education Body' />
        <Placeholder name='From' />
        <Placeholder name='To' />
        <Placeholder name='Enter Some Details on Your Achievements Here' />
        <Placeholder name='Enter Some Details on Your Achievements Here' />
        <Placeholder name='Enter Some Details on Your Achievements Here' />
        <button>Add</button>
      </div>
    );
  }
}

export default EduContainer;
