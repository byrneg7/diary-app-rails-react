import React from 'react';

import AuthNavContainer from "../shared/navbar/authNav/AuthNavBar";
import './authLayout.scss';

const AuthLayout = ({children}) => {
  return (
    <>
      <AuthNavContainer/>
      <div className='below-nav'>
        {children}
      </div>
    </>
  )
};

export default AuthLayout;
