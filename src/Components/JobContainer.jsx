import React from 'react';
import maxKeyInArray from './AppLogic';
import Placeholder from './ValuePlaceholder';

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
      <div>
        <Placeholder name='Enter Job Name' />
        <Placeholder name='Enter Job Title' />
        <Placeholder name='From' />
        <Placeholder name='To' />
        {roles}
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default JobContainer;
