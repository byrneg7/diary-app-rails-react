import React from 'react'
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const NavDropdown = ({anchorEl, isMenuOpen, handleMenuClose, profileClick, signOutClick}) => {
  return(
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      id='primary-search-account-menu'
      keepMounted
      transformOrigin={{vertical: 'top', horizontal: 'right'}}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={profileClick}>Profile</MenuItem>
      <MenuItem onClick={signOutClick}>Sign out</MenuItem>
    </Menu>
  )
};

export default NavDropdown;