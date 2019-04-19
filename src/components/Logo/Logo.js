import React from 'react';
import burgerImage from './../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => {
    return (
        <div className={classes.Logo} style={{height: props.height}}>
            <img alt="burger logo" src={burgerImage}/>
        </div>
    )
};

export default logo;
