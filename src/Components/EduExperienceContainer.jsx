import React from 'react';
import maxKeyInArray from './AppLogic';
import EduContainer from './EduContainer';
import './EduExperienceContainer.css';

class EduExperienceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { edus: [{ id: 1 }] };
  }

  handleClick = () => {
    const x = maxKeyInArray(this.state.edus);
    this.setState((state) => ({
      edus: state.edus.concat({ id: x + 1 }),
    }));
  };

  render() {
    const edus = this.state.edus.map((edu) => {
      return <EduContainer key={edu.id} canEdit={this.props.canEdit} />;
    });
    return (
      <div className='edu-experience-container'>
        <div className='edu-experience-heading'>
          <h2>Education History</h2>
          <button onClick={this.handleClick}>Add</button>
        </div>
        <div className='edu-list'>{edus}</div>
      </div>
    );
  }
}

export default EduExperienceContainer;
