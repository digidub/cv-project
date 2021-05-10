import React from 'react';
import EditBox from './Edit-Box';
import DisplayBox from './Display-Box';

class Placeholder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editMode: this.props.edit ?? false, value: this.props.name };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      editMode: !prevState.editMode,
    }));
  };

  handleSave = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      editMode: !prevState.editMode,
      value: e.target.previousSibling.value,
    }));
  };

  render() {
    return this.state.editMode ? (
      <EditBox original={this.state.value} save={this.handleSave} class={this.props.class} />
    ) : (
      <DisplayBox
        value={this.state.value}
        edit={this.handleClick}
        canEdit={this.props.canEdit}
        class={this.props.class}
        canDelete={this.props.canDelete}
        dataKey={this.props.dataKey}
      />
    );
  }
}

export default Placeholder;
