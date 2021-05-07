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
    let canEdit;
    if (this.props.canEdit) canEdit = <button onClick={this.props.edit}>edit</button>;
    return (
      <div>
        {this.props.value}
        {canEdit}
      </div>
    );
  }
}

export default DisplayBox;
