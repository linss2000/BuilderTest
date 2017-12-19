import React, {Component} from 'react';

import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
class Layout extends Component{
  state = {
    showSideDrawer: false
  }
  sideDrawerClosedHandler = () =>{
    this.setState({showSideDrawer:false});
  }
  sideDrawerToggleHandler = () =>{
    //let drawerState = !this.state.showSideDrawer;
    this.setState((prevState)=>{
      console.log('menu clicked');
      return {showSideDrawer: !prevState.showSideDrawer};
    })
    //this.setState({showSideDrawer:drawerState});
    //return drawerState;
  }
  render()
  {
    return(
    <div>

      <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          drawerToggleClicked={this.sideDrawerToggleHandler}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
          />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Layout;
