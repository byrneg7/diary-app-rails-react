import React from 'react';

import './landingPage.scss'
import Footer from '../shared/Footer';
import LandingNavbar from '../landingPage/LandingNavbar';

const LandingPageLayout = ({ children }) => {
  return (
    <>
      <LandingNavbar/>
      {children}
      <Footer/>
    </>
  )
};

export default LandingPageLayout;