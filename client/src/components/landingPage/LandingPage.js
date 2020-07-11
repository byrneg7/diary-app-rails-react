import React from 'react';

import TopHero from '../shared/TopHero';
import HeroCarousel from '../shared/HeroCarousel';
import IconRow from '../shared/IconRow';
import VideoHero from '../shared/VideoHero';
import AlternatingImgTextHero from '../shared/AlternatingImgTextHero';
import CallToAction from '../shared/CallToAction';

const LandingPage = () => {
  return(
    <>
      <TopHero/>
      <HeroCarousel/>
      <IconRow/>
      <VideoHero/>
      <AlternatingImgTextHero/>
      <CallToAction/>
    </>
  )
};

export default LandingPage;