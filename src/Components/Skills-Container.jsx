import React from 'react';
import PlaceHolder from './Name-Holder';

class SkillsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { skills: [] };
  }

  render() {
    return <button>Add</button>;
  }
}

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

class JobContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { skills: [] };
  }

  render() {
    return (
      <div>
        <PlaceHolder name='Enter Job Name' />
        <PlaceHolder name='Enter Job Title' />
        <PlaceHolder name='From' />
        <PlaceHolder name='To' />
        <PlaceHolder name='Enter Some Details on Your Responsibilites/Achievements Here' />
        <PlaceHolder name='Enter Some Details on Your Responsibilites/Achievements Here' />
        <PlaceHolder name='Enter Some Details on Your Responsibilites/Achievements Here' />
        <button>Add</button>
      </div>
    );
  }
}

class EducationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { skills: [] };
  }

  render() {
    return (
      <div>
        <div>
          <h2>Education History</h2>
        </div>
        <button>Add</button>
      </div>
    );
  }
}

class EduContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { skills: [] };
  }

  render() {
    return (
      <div>
        <PlaceHolder name='Enter Qualification Name' />
        <PlaceHolder name='Enter Education Body' />
        <PlaceHolder name='From' />
        <PlaceHolder name='To' />
        <PlaceHolder name='Enter Some Details on Your Achievements Here' />
        <PlaceHolder name='Enter Some Details on Your Achievements Here' />
        <PlaceHolder name='Enter Some Details on Your Achievements Here' />
        <button>Add</button>
      </div>
    );
  }
}

export default SkillsContainer;
