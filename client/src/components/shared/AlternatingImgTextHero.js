import React from 'react';
import mobile1 from '../../assets/images/mobile-1.jpg';
import mobile2 from '../../assets/images/mobile-2.jpg';

const AlternatingImgTextHero = () => {
  return(
    <div className="colorlib-work-featured colorlib-bg-white">
      <div className="container">
        <div className="row mobile-wrap">
          <div className="col-md-5 animate-box">
            <div className="mobile-img" style={{ backgroundImage: mobile1 }}/>
          </div>
          <div className="col-md-7 animate-box">
            <div className="desc">
              <h2>Real template creation</h2>
              <div className="features">
                <span className="icon"><i className="icon-lightbulb"/></span>
                <div className="f-desc">
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                    unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
                    decided to leave for the far World of Grammar.</p>
                </div>
              </div>
              <div className="features">
                <span className="icon"><i className="icon-circle-compass"/></span>
                <div className="f-desc">
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                    unorthographic life One day however a small line of blind text by the name</p>
                </div>
              </div>
              <div className="features">
                <span className="icon"><i className="icon-beaker"/></span>
                <div className="f-desc">
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                    unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
                    decided to leave for the far World of Grammar.</p>
                </div>
              </div>
              <p>
                <a href="#" className="btn btn-primary btn-outline with-arrow">Start collaborating
                  <i className="icon-arrow-right3"/>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="row mobile-wrap">
          <div className="col-md-5 col-md-push-7 animate-box">
            <div className="mobile-img" style={{ backgroundImage: mobile2 }}></div>
          </div>
          <div className="col-md-7 col-md-pull-5 animate-box">
            <div className="desc">
              <h2>Finish template creation</h2>
              <div className="features">
                <span className="icon"><i className="icon-lightbulb"></i></span>
                <div className="f-desc">
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                    unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
                    decided to leave for the far World of Grammar.</p>
                </div>
              </div>
              <div className="features">
                <span className="icon"><i className="icon-circle-compass"></i></span>
                <div className="f-desc">
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                    unorthographic life One day however a small line of blind text by the name</p>
                </div>
              </div>
              <div className="features">
                <span className="icon"><i className="icon-beaker"></i></span>
                <div className="f-desc">
                  <p>Even the all-powerful Pointing has no control about the blind texts it is an almost
                    unorthographic life One day however a small line of blind text by the name of Lorem Ipsum
                    decided to leave for the far World of Grammar.</p>
                </div>
              </div>
              <p>
                <a href="#" className="btn btn-primary btn-outline with-arrow">
                  Start collaborating
                  <i className="icon-arrow-right3"/>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AlternatingImgTextHero;