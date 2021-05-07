import React from 'react';
import maxKeyInArray from './AppLogic';
import JobContainer from './JobContainer';
import './WorkExperienceContainer.css';

class WorkExperienceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { jobs: [{ id: 1 }] };
  }

  handleClick = () => {
    const x = maxKeyInArray(this.state.jobs);
    this.setState((state) => ({
      jobs: state.jobs.concat({ id: x + 1 }),
    }));
  };

  render() {
    let canEdit;
    if (this.props.canEdit) canEdit = <button onClick={this.handleClick}>Add</button>;
    const jobs = this.state.jobs.map((job) => {
      return <JobContainer key={job.id} canEdit={this.props.canEdit} />;
    });
    return (
      <div className='work-experience-container'>
        <div className='work-experience-heading'>
          <h2>Work Experience</h2>
          {canEdit}
        </div>
        <div className='jobs-list'>{jobs}</div>
      </div>
    );
  }
}

export default WorkExperienceContainer;
