import React from 'react';

class EditBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      value: '',
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        <input type='text' defaultValue={this.props.value} onChange={this.handleChange} />
        <button onClick={this.props.save}>save</button>
      </div>
    );
  }
}
