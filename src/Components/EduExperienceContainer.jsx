import React from 'react';
import maxKeyInArray from './AppLogic';
import EduContainer from './EduContainer';

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
      return <EduContainer key={edu.id} />;
    });
    return (
      <div>
        <div>
          <h2>Education History</h2>
        </div>
        <div>{edus}</div>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default EduExperienceContainer;
