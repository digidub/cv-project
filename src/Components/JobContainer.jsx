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

  render() {
    let canEdit;
    let canDelete;
    if (this.props.canEdit) canEdit = <button onClick={this.handleClick}>Add Row</button>;
    if (this.props.canEdit && this.props.canDelete) canDelete = <button onClick={this.props.canDelete}>Delete Job</button>;
    const roles = this.state.roles.map((role) => {
      return <Placeholder key={role.id} name={role.name} edit={role.edit ?? false} canEdit={this.props.canEdit} />;
    });
    return (
      <div className='job-container' data-key={this.props.dataKey}>
        <div className='job-heading'>
          <div className='job-title'>
            <Placeholder name={this.props.name} canEdit={this.props.canEdit} />
            <p> - </p>
            <Placeholder name='Enter Company Name' canEdit={this.props.canEdit} />
          </div>
          <div className='job-from-to'>
            <Placeholder name='From' canEdit={this.props.canEdit} />
            <p> - </p>
            <Placeholder name='To' canEdit={this.props.canEdit} />
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
