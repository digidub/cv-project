import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TitleContainer from './Components/TitleContainer';
import DocumentContainer from './Components/DocumentContainer';
import SkillsContainer from './Components/SkillsContainer';
import WorkExperienceContainer from './Components/WorkExperienceContainer';
import EduExperienceContainer from './Components/EduExperienceContainer';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App>
      <DocumentContainer>
        <TitleContainer />
        <SkillsContainer />
        <WorkExperienceContainer />
        <EduExperienceContainer />
      </DocumentContainer>
    </App>
  </React.StrictMode>,
  document.getElementById('root')
);
