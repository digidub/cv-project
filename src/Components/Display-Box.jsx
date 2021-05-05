import React from 'react';

class DisplayBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        {this.props.value}
        <button onClick={this.props.edit}>edit</button>
      </div>
    );
  }
}

export default DisplayBox;
