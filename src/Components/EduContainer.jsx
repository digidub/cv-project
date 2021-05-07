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
    const quals = this.state.quals.map((qual) => {
      return <Placeholder key={qual.id} name={qual.name} edit={qual.edit ?? false} />;
    });
    return (
      <div className='edu-container'>
        <div className='edu-heading'>
          <div className='edu-title'>
            <Placeholder name='Enter Education Body' />
            <p> - </p>
            <Placeholder name='Enter Qualification Name' />
          </div>
          <div className='edu-from-to'>
            <Placeholder name='From' />
            <p> - </p>
            <Placeholder name='To' />
          </div>
        </div>
        <div className='edu-roles'>{quals}</div>
        <button onClick={this.handleClick}>Add Row</button>
      </div>
    );
  }
}

export default EduContainer;
