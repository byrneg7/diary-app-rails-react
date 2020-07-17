import React from 'react';

import Hero from "../hero/Hero";
import HeroIllustration from "../hero/HeroIllustration";

const LandingPage = () => {
  return (
      <Hero
        title="Logbook"
        content="Logbook makes it easy to create, update and manage journals. Personal diaries, fitness journals, professional ledgers and more..."
        illustration={HeroIllustration}
      />
  )
};

export default LandingPage;