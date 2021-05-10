import React from 'react';
import './ValuePlaceHolder.css';

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
    let canDelete;
    if (this.props.canEdit) canEdit = <button onClick={this.props.edit}>edit</button>;
    if (this.props.canEdit && this.props.canDelete) canDelete = <button onClick={this.props.canDelete}>delete</button>;
    return (
      <div className={this.props.class} data-key={this.props.dataKey}>
        {this.props.value}
        {canEdit}
        {canDelete}
      </div>
    );
  }
}

export default DisplayBox;
