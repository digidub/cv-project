import React from 'react';
import './DocumentContainer.css';

class DocumentContainer extends React.Component {
  render() {
    return (
      <div className='document-container'>
        {React.Children.map(this.props.children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { canEdit: this.props.canEdit });
          }
        })}
      </div>
    );
  }
}

export default DocumentContainer;
