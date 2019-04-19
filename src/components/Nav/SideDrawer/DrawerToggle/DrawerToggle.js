import React from 'react';
import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => {
    return (
        <div onClick={props.toggleSideDrawer} className={classes.DrawerToggle}>
            <div/>
            <div/>
            <div/>
        </div>
    );
};

export default drawerToggle;