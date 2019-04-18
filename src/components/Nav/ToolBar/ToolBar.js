import React from 'react';
import classes from './ToolBar.module.css';
import Logo from './../../Logo/Logo';
import NavItems from './../../Nav/NavItems/NavItems';


const toolBar = (props) => (
   <header className={classes.ToolBar}>
       <div>MENU</div>
       <Logo/>
       <NavItems/>
   </header>
);


export default toolBar;