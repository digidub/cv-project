import React from 'react';
import Placeholder from './ValuePlaceholder';
import maxKeyInArray from './AppLogic';

class TitleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: [
        { id: 1, name: 'Enter Name Here' },
        { id: 2, name: 'Telephone Number' },
        { id: 3, name: 'Email' },
        { id: 4, name: 'Website' },
      ],
    };
  }

  handleClick = () => {
    const x = maxKeyInArray(this.state.placeholder);
    this.setState((state) => ({
      placeholder: state.placeholder.concat({ id: x + 1, name: 'enter name here' }),
    }));
    console.log(this.state);
  };

  render() {
    const placeholderItems = this.state.placeholder.map((name, index) => {
      return <Placeholder name={name.name} key={name.id} />;
    });
    return (
      <div>
        {placeholderItems}
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

export default TitleContainer;
