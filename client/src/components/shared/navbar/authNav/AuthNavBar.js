import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";

import { useStyles } from './AuthNavStyles'
import { openModal } from "../../../modals/openModal";
import navBarScrollHelper from "../../../helpers/navbarScrollHelper";
import NavDropdown from "./NavDropdown";
import NavMobileDropdown from "./NavMobileDropdown";
import './authNav.scss';

navBarScrollHelper();

const AuthNavBar = ({history}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => setAnchorEl(event.currentTarget);
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = event => setMobileMoreAnchorEl(event.currentTarget);

  const profileClick = () => {
    handleMenuClose();
    history.push('/profile')
  };

  const signOutClick = () => {
    handleMenuClose();
    openModal(dispatch, 'logout')
  };

  return (
    <div className='scroll-disappear' id='navbar'>
      <div className={classes.grow}>
        <AppBar position="static" className='auth-appbar'>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon style={{color:'black'}}/>
            </IconButton>
            <h4 className='my-auto font-weight-bold nav-title' onClick={()=>history.push('/')}>
              logbook
            </h4>
            <div className={classes.grow}/>
            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls='primary-search-account-menu'
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle style={{color:'black'}}/>
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls='primary-search-account-menu-mobile'
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                style={{color: 'black'}}
              >
                <MoreIcon/>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <NavMobileDropdown anchorEl={mobileMoreAnchorEl} handleMenuClose={handleMobileMenuClose}
                           isMenuOpen={isMobileMenuOpen} profileClick={profileClick} signOutClick={signOutClick}/>
        <NavDropdown anchorEl={anchorEl} handleMenuClose={handleMenuClose} isMenuOpen={isMenuOpen}
                     profileClick={profileClick} signOutClick={signOutClick}/>
      </div>
    </div>
  );
};


export default withRouter(AuthNavBar);