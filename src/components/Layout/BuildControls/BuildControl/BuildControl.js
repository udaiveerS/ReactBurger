import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <span className={classes.Label}>{props.label}</span>
            <button className={classes.More}>more</button>
            <button className={classes.Less}>less</button>
        </div>
    );
};

export default buildControl;

