import React from 'react';

class WorkExperienceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { skills: [] };
  }

  render() {
    return (
      <div>
        <div>
          <h2>Work Experience</h2>
        </div>
        <button>Add</button>
      </div>
    );
  }
}
