import React from 'react';

import dashboardBoard1 from '../../assets/images/dashboard_full_1.jpg';

const HeroCarousel = () => {
  return(
    <div className="colorlib-featured">
      <div className="row animate-box">
        <div className="featured-wrap">
          <div className="item">
            <div className="col-md-8 col-md-offset-2">
              <div className="featured-entry">
                <img className="img-responsive" src={dashboardBoard1} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HeroCarousel;