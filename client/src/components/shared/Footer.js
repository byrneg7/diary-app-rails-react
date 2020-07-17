import React from 'react';

import SocialLinks from './SocialLinks';
import NavLinks from './NavLinks';

const Footer = () => {
  return (

    <footer className="site-footer text-light">
      <div className="container">
        <div className="site-footer-inner">
          <NavLinks className="footer-links"/>
          <SocialLinks className="footer-social-links"/>
          <div className="footer-copyright">&copy; 2020
            <a href='https://www.byrneg7code.com' target='_blank' rel='noreferrer' className='px-1 link-white-font'> byrneg7code </a>
             all rights reserved
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
