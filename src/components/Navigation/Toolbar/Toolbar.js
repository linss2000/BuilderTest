import React from 'react';
import classes from './Toolbar.css'
import BurgerLogo from '../../Logo/Logo'
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked}/>
    <div className={classes.DesktopOnly}  ><BurgerLogo  />
    </div>
    <nav className={classes.DesktopOnly}>
    <NavigationItems/>
    </nav>
  </header>
);
export default toolbar;
