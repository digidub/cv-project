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

  handleAdd = () => {
    const x = maxKeyInArray(this.state.placeholder);
    this.setState((state) => ({
      placeholder: state.placeholder.concat({ id: x + 1, name: 'enter name here' }),
    }));
  };

  handleDelete = (e) => {
    console.log(e);
    const toDelete = e.target.previousSibling.previousSibling.textContent;
    this.setState((state) => ({
      placeholder: state.placeholder.filter((word) => word.name !== toDelete),
    }));
  };

  render() {
    let canEdit;
    if (this.props.canEdit) canEdit = <button onClick={this.handleAdd}>Add</button>;
    const placeholderItems = this.state.placeholder.map((name, index) => {
      return <Placeholder name={name.name} key={name.id} canEdit={this.props.canEdit} canDelete={this.handleDelete} />;
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
