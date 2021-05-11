import React from 'react';
import maxKeyInArray from './AppLogic';
import EduContainer from './EduContainer';
import './EduExperienceContainer.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class EduExperienceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { edus: [{ id: 1 }] };
  }

  handleAdd = () => {
    let x;
    if (this.state.edus.length < 1) x = 1;
    else x = maxKeyInArray(this.state.edus);
    this.setState((state) => ({
      edus: state.edus.concat({ id: x + 1 }),
    }));
  };

  handleDelete = (e) => {
    const toDelete = parseInt(e.target.parentNode.parentNode.parentNode.dataset.key);
    this.setState((state) => ({
      edus: state.edus.filter((edu) => edu.id !== toDelete),
    }));
  };

  render() {
    let canEdit;
    if (this.props.canEdit) canEdit = <button onClick={this.handleAdd}>Add</button>;
    return (
      <div className='edu-experience-container'>
        <div className='edu-experience-heading'>
          <h2>Education History</h2>
          {canEdit}
        </div>
        <TransitionGroup className='edu-list'>
          {this.state.edus.map((edu) => (
            <CSSTransition key={edu.id} ref={this.wrapper} unmountOnExit classNames='job' timeout={300}>
              <EduContainer name={edu.name} key={edu.id} dataKey={edu.id} canEdit={this.props.canEdit} canDelete={this.handleDelete} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

export default EduExperienceContainer;
