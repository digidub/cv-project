import React from 'react';
import maxKeyInArray from './AppLogic';
import Placeholder from './ValuePlaceholder';

class EduContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quals: [{ id: 1, name: 'Enter details of qualifications here' }] };
  }

  handleClick = () => {
    const x = maxKeyInArray(this.state.quals);
    this.setState((state) => ({
      quals: state.quals.concat({ id: x + 1, name: 'Enter details of qualifications here' }),
    }));
  };

  render() {
    const quals = this.state.quals.map((qual) => {
      return <Placeholder key={qual.id} name={qual.name} />;
    });
    return (
      <div>
        <Placeholder name='Enter Qualification Name' />
        <Placeholder name='Enter Education Body' />
        <Placeholder name='From' />
        <Placeholder name='To' />
        {quals}
        <button onClick={this.handleClick}>Add Row</button>
      </div>
    );
  }
}

export default EduContainer;
