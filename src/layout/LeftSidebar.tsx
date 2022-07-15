import { Navigation } from '../components/Navigation';
import * as React from 'react';

const LeftSidebar: React.FunctionComponent = () => {
  return (
    <div className='left-sidebar'>
      <Navigation />
    </div>
  )
};

export {
  LeftSidebar
};
