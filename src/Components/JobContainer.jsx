import React from 'react';
import Placeholder from './ValuePlaceholder';

class JobContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { skills: [] };
  }

  render() {
    return (
      <div>
        <Placeholder name='Enter Job Name' />
        <Placeholder name='Enter Job Title' />
        <Placeholder name='From' />
        <Placeholder name='To' />
        <Placeholder name='Enter Some Details on Your Responsibilites/Achievements Here' />
        <Placeholder name='Enter Some Details on Your Responsibilites/Achievements Here' />
        <Placeholder name='Enter Some Details on Your Responsibilites/Achievements Here' />
        <button>Add</button>
      </div>
    );
  }
}

export default JobContainer;
