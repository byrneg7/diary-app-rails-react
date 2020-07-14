import React from 'react';
import LandingNav from "../shared/navbar/LandingNav";

const LandingPageLayout = ({ children }) => {
  return (
    <>
      <LandingNav/>
      {children}
      <div> footer </div>
    </>
  )
};

export default LandingPageLayout;