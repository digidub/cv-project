import React from 'react';

class EditBox extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      value: '',
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  componentDidMount = () => {
    this.input.current.focus();
  };

  handleKeyPress = (e) => {
    if (e.keyCode !== 13) return;
    this.props.save();
  };

  render() {
    return (
      <div>
        <form>
          <input
            type='text'
            defaultValue={this.props.original}
            onChange={this.handleChange}
            ref={this.input}
            onFocus={(e) => e.target.select()}
            className={this.props.class}
          />
          <input type='submit' onClick={this.props.save} value='save' />
        </form>
      </div>
    );
  }
}

export default EditBox;
