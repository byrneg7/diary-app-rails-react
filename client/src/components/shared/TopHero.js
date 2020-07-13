import React from 'react';
import { openModal } from "../modals/openModal";
import { useDispatch } from "react-redux";

const TopHero = () => {
  const dispatch = useDispatch();
  return (
    <section id="home" className="video-hero" data-section="home">
      <div className="overlay"/>
      <a className="player" data-property="{
            videoURL:'https://www.youtube.com/watch?v=vqqt5p0q-eU',
            containment:'#home',
            showControls:false,
            autoPlay:true,
            loop:true,
            mute:true,
            startAt:0,
            opacity:1,
            quality:'default'}"
      />
      <div className="display-t text-center">
        <div className="display-tc">
          <div className="container">
            <div className="col-md-12 col-md-offset-0">
              <div className="animate-box">
                <h2>Take on your biggest projects and goals</h2>
                <p>with logbook's interactive journal helper</p>
                <div className="btn btn-primary btn-lg btn-custom"
                     onClick={() => openModal(dispatch, 'signup')}
                >
                  Sign up
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default TopHero;