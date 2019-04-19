import React from 'react';
import Logo from './../../Logo/Logo';
import NavItems from './../NavItems/NavItems';
import classes from './SideDrawer.module.css';
import BackDrop from './../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.close];
    if(props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <>
            <BackDrop show={props.open} clicked={props.closed}/>
            <header className={attachedClasses.join(" ")}>
                <Logo height={"10%"}/>
                <nav>
                    <NavItems/>
                </nav>
            </header>
        </>
    );
};

export default sideDrawer;