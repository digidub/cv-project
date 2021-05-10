import React from 'react';
import Placeholder from './ValuePlaceholder';
import './TitleContainer.css';

class TitleContainer extends React.Component {
  render() {
    return (
      <div className='title-container'>
        <div className='name'>
          <Placeholder name='Your Name' className='heading' canEdit={this.props.canEdit} class='h2' />
        </div>
        <div className='contact-details'>
          <Placeholder name='Telephone' canEdit={this.props.canEdit} />
          <Placeholder name='Email' canEdit={this.props.canEdit} />
          <Placeholder name='Website' canEdit={this.props.canEdit} />
        </div>
      </div>
    );
  }
}

export default TitleContainer;
