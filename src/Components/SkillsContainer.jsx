import React from 'react';
import Placeholder from './ValuePlaceholder';
import maxKeyInArray from './AppLogic';
import './SkillsContainer.css';

class SkillsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: [
        { id: 1, name: 'JavaScript' },
        { id: 2, name: 'NPM' },
        { id: 3, name: 'Webpack' },
        { id: 4, name: 'React' },
      ],
    };
  }

  handleClick = () => {
    const x = maxKeyInArray(this.state.placeholder);
    this.setState((state) => ({
      placeholder: state.placeholder.concat({ id: x + 1, name: 'enter name here' }),
    }));
  };

  render() {
    let canEdit;
    if (this.props.canEdit) canEdit = <button onClick={this.handleClick}>Add</button>;
    const placeholderItems = this.state.placeholder.map((name, index) => {
      return <Placeholder name={name.name} key={name.id} canEdit={this.props.canEdit} />;
    });
    return (
      <div className='skills-container'>
        <div className='skills-heading'>
          <h2>Skills</h2>
          {canEdit}
        </div>
        <div className='skills-list'>{placeholderItems}</div>
      </div>
    );
  }
}

export default SkillsContainer;
