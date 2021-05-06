import React from 'react';
import './DocumentContainer.css';

class DocumentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className='document-container'>{this.props.children}</div>;
  }
}

export default DocumentContainer;
