import React from 'react';

class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <button onClick={this.props.render(this.state)}>add</button>;
  }
}

export default AddButton;
