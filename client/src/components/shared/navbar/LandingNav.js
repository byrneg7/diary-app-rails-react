import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { openModal } from "../../modals/openModal";

const LandingNav = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);
  const handleLoggedIn = () => user ? 'logged in' : 'not logged in';

  return (
    <div>
      <Button onClick={() => openModal(dispatch, 'logout')}> log out </Button>
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