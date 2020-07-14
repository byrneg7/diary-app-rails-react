import React from 'react';

const LandingPageLayout = ({ children }) => {
  return (
    <>
      <div> landing navbar </div>
      {children}
      <div> footer </div>
    </>
  )
};

export default LandingPageLayout;