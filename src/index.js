import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TitleContainer from './Components/TitleContainer';
import DocumentContainer from './Components/DocumentContainer';
import SkillsContainer from './Components/SkillsContainer';

ReactDOM.render(
  <React.StrictMode>
    <DocumentContainer>
      <TitleContainer />
      <SkillsContainer />
    </DocumentContainer>
  </React.StrictMode>,
  document.getElementById('root')
);
