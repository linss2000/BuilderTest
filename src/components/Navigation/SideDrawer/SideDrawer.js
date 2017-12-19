
import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css'
const sideDrawer =(props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
      attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <div className={attachedClasses.join(' ')}>
    <div className={classes.Logo} onClick={props.drawerToggleClicked}>
    <Logo />
    </div>
    <nav>
      <NavigationItems/>
    </nav>
    </div>
  );
}


export default sideDrawer;
