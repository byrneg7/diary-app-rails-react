import React from 'react';
import { useSelector } from "react-redux";

const LandingNav = () => {
  const user = useSelector(state => state.user);
  const handleLoggedIn = () => user ? 'logged in' : 'not logged in';

  return (
    <div>
      <p>navbar </p>
      {handleLoggedIn()}
    </div>
  )
};

export default LandingNav;