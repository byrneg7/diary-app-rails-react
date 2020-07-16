import React from 'react';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LandingNav = () => {
  const user = useSelector(state => state.user);
  const handleLoggedIn = () => user ? 'logged in' : 'not logged in';

  return (
    <div>
      <Link to='/'>
        <h1> LogBook </h1>
      </Link>
      <Link to='/journals'>
        <h3>
          Journals
        </h3>
      </Link>
      {handleLoggedIn()}
      <hr/>
    </div>
  )
};

export default LandingNav;