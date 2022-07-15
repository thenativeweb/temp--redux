import { CurrencyConversionForm } from '../components/CurrencyConversionForm';
import * as React from 'react';

const RightSidebar: React.FunctionComponent = () => {
  return (
    <div className='right-sidebar'>
     <CurrencyConversionForm />
    </div>
  )
};

export {
  RightSidebar
};
