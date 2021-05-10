import React from 'react';
import maxKeyInArray from './AppLogic';
import JobContainer from './JobContainer';
import './WorkExperienceContainer.css';

class WorkExperienceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { jobs: [{ id: 1, name: 'Enter Job Title' }] };
  }

  handleAdd = () => {
    let x;
    if (this.state.jobs.length < 1) x = 1;
    else x = maxKeyInArray(this.state.jobs);
    this.setState((state) => ({
      jobs: state.jobs.concat({ id: x + 1, name: 'Enter Job Title' }),
    }));
  };

  handleDelete = (e) => {
    const toDelete = e.target.parentNode.parentNode.parentNode.dataset.key;
    this.setState((state) => ({
      jobs: state.jobs.filter((job) => job.id != toDelete),
    }));
  };

  render() {
    let canEdit;
    if (this.props.canEdit) canEdit = <button onClick={this.handleAdd}>Add</button>;
    const jobs = this.state.jobs.map((job) => {
      return <JobContainer name={job.name} key={job.id} dataKey={job.id} canEdit={this.props.canEdit} canDelete={this.handleDelete} />;
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
