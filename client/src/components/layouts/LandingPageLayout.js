import React from 'react';
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const LandingPageLayout = ({children}) => {
  return (
    <div className="body-wrap boxed-container">
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
};

export default LandingPageLayout;
