import React from 'react';
import NavigationItem from './NavigationItem'
import classes from './NavigationItems.css';

const navigationItems = () => (

  <ul className = {classes.NavigationItems}>
  <NavigationItem link="/" active>Burger Builder</NavigationItem>
  <NavigationItem link="/fillform" >Form Builder</NavigationItem>
  <NavigationItem link="/checkout">Checkout</NavigationItem>
  </ul>
)

export default navigationItems;
