import React from 'react';
import Placeholder from './ValuePlaceholder';
import maxKeyInArray from './AppLogic';

class TitleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: [
        { id: 1, name: 'Enter Name Here' },
        { id: 2, name: 'Telephone Number' },
        { id: 3, name: 'Email' },
        { id: 4, name: 'Website' },
      ],
    };
  }

  render() {
    const placeholderItems = this.state.placeholder.map((name, index) => {
      return <Placeholder name={name.name} key={name.id} />;
    });
    return (
      <div>
        <div className='name'>
          <Placeholder name='Your Name' />
        </div>
        <div className='contact-details'>
          <Placeholder name='Telephone Number' />
          <Placeholder name='Email' />
          <Placeholder name='Website' />
        </div>
      </div>
    );
  }
}

export default TitleContainer;
