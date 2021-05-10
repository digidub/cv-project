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
      roles: state.roles.concat({ id: x + 1, name: 'Enter Some Details on Your Experience Here', edit: 'true' }),
    }));
  };

  handleDelete = (e) => {
    const toDelete = parseInt(e.target.parentNode.dataset.key);
    this.setState((state) => ({
      roles: state.roles.filter((role) => role.id !== toDelete),
    }));
  };

  render() {
    let canEdit;
    let canDelete;
    if (this.props.canEdit) canEdit = <button onClick={this.handleClick}>Add Row</button>;
    if (this.props.canEdit && this.props.canDelete) canDelete = <button onClick={this.props.canDelete}>Delete Job</button>;
    const roles = this.state.roles.map((role) => {
      return (
        <div className='list-item' key={role.id}>
          <li></li>
          <Placeholder
            key={role.id}
            dataKey={role.id}
            name={role.name}
            edit={role.edit ?? false}
            canEdit={this.props.canEdit}
            canDelete={this.handleDelete}
          />
        </div>
      );
    });
    return (
      <div className='job-container' data-key={this.props.dataKey}>
        <div className='job-heading'>
          <div className='job-title'>
            <Placeholder name={this.props.name} canEdit={this.props.canEdit} class='b' />
            <p> - </p>
            <Placeholder name='Enter Company Name' canEdit={this.props.canEdit} class='b' />
          </div>
          <div className='job-from-to'>
            <Placeholder name='From' canEdit={this.props.canEdit} class='b' />
            <p> - </p>
            <Placeholder name='To' canEdit={this.props.canEdit} class='b' />
            {canDelete}
          </div>
        </div>
        <div className='job-roles'>{roles}</div>
        {canEdit}
      </div>
    );
  }
}

export default JobContainer;
