import React from 'react';
import maxKeyInArray from './AppLogic';
import Placeholder from './ValuePlaceholder';
import './JobContainer.css';

class JobContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: [
        { id: 1, name: 'Enter Some Details on Your Responsibilites/Achievements Here' },
        { id: 2, name: 'Enter Some Details on Your Responsibilites/Achievements Here' },
        { id: 3, name: 'Enter Some Details on Your Responsibilites/Achievements Here' },
      ],
    };
  }

  handleClick = () => {
    const x = maxKeyInArray(this.state.roles);
    this.setState((state) => ({
      roles: state.roles.concat({ id: x + 1, name: 'Enter Some Details on Your Responsibilites/Achievements Here', edit: 'true' }),
    }));
  };

  render() {
    const roles = this.state.roles.map((role) => {
      return <Placeholder key={role.id} name={role.name} edit={role.edit ?? false} />;
    });
    return (
      <div className='job-container'>
        <div className='job-heading'>
          <div className='job-title'>
            <Placeholder name='Enter Company Name' />
            <p> - </p>
            <Placeholder name='Enter Job Title' />
          </div>
          <div className='job-from-to'>
            <Placeholder name='From' />
            <p> - </p>
            <Placeholder name='To' />
          </div>
        </div>
        <div className='job-roles'>{roles}</div>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default JobContainer;
