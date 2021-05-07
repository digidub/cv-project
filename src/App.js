import React from 'react';
import './App.css';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { canEdit: true };
  }

  handleChange = () => {
    this.setState((prevState) => ({
      canEdit: !prevState.canEdit,
    }));
  };

  render() {
    return (
      <div className='app'>
        <div className='header'>
          <Toggle defaultChecked={this.state.canEdit} onChange={this.handleChange} />
          <span>Edit Mode?</span>
        </div>
        <div className='body'>
          {React.Children.map(this.props.children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, { canEdit: this.state.canEdit });
            }
          })}
        </div>
      </div>
    );
  }
}

export default App;
