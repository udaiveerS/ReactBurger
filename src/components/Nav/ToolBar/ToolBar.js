import React from 'react';
import classes from './ToolBar.module.css';
import Logo from './../../Logo/Logo';
import NavItems from './../../Nav/NavItems/NavItems';
import DrawerToggle from './../SideDrawer/DrawerToggle/DrawerToggle'

const toolBar = (props) => (
   <header className={classes.ToolBar}>
       <DrawerToggle toggleSideDrawer={props.toggleSideDrawer}/>
       <Logo height={"80%"}/>
       <div className={classes.DesktopOnly}>
           <NavItems/>
       </div>
   </header>
);


export default toolBar;