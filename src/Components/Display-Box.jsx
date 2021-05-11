import React from 'react';
import './ValuePlaceholder.css';
import classNames from 'classnames';

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
    if (this.props.canEdit) canEdit = <button onClick={this.props.edit} className='edit-button'></button>;
    if (this.props.canEdit && this.props.canDelete) canDelete = <button onClick={this.props.canDelete} className='delete-button'></button>;
    return (
      <div className={classNames(this.props.class ?? 'display-box', this.props.canEdit ? 'hover' : '')} data-key={this.props.dataKey}>
        {this.props.value}
        {canEdit}
        {canDelete}
      </div>
    );
  }
}

export default DisplayBox;
