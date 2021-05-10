import React from 'react';
import maxKeyInArray from './AppLogic';
import Placeholder from './ValuePlaceholder';
import './EduContainer.css';

class EduContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quals: [{ id: 1, name: 'Enter details of qualifications here' }] };
  }

  handleClick = () => {
    const x = maxKeyInArray(this.state.quals);
    this.setState((state) => ({
      quals: state.quals.concat({ id: x + 1, name: 'Enter details of qualifications here', edit: 'true' }),
    }));
  };

  render() {
    let canEdit;
    let canDelete;
    if (this.props.canEdit) canEdit = <button onClick={this.handleClick}>Add Row</button>;
    if (this.props.canEdit && this.props.canDelete) canDelete = <button onClick={this.props.canDelete}>Delete Edu</button>;
    const quals = this.state.quals.map((qual) => {
      return <Placeholder key={qual.id} name={qual.name} edit={qual.edit ?? false} canEdit={this.props.canEdit} canDelete={this.props.canDelete} />;
    });
    return (
      <div className='edu-container' data-key={this.props.dataKey}>
        <div className='edu-heading'>
          <div className='edu-title'>
            <Placeholder name='Enter Education Body' canEdit={this.props.canEdit} class='b' />
            <p> - </p>
            <Placeholder name='Enter Qualification Name' canEdit={this.props.canEdit} class='b' />
          </div>
          <div className='edu-from-to'>
            <Placeholder name='From' canEdit={this.props.canEdit} class='b' />
            <p> - </p>
            <Placeholder name='To' canEdit={this.props.canEdit} class='b' />
            {canDelete}
          </div>
        </div>
        <div className='edu-roles'>{quals}</div>
        {canEdit}
      </div>
    );
  }
}

export default EduContainer;
