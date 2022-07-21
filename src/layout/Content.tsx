import * as React from 'react';
import './Content.css';

interface ContentProps {
  children: React.ReactElement
}

const Content: React.FunctionComponent<ContentProps> = ({ children }) => {
  return (
    <div className="content">
      { children }
    </div>
  )
};

export {
  Content
};
