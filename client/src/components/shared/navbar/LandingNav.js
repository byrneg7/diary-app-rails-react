import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LandingNav = () => {
  const user = useSelector(state => state.user);
  const handleLoggedIn = () => user ? 'logged in' : 'not logged in';

  return (
    <div>
      <h1> navbar </h1>
      <Link to='/'> home page </Link>
      {handleLoggedIn()}
      <hr />
    </div>
  )
};

export default LandingNav;