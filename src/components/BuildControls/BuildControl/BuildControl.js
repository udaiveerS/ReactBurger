import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <span className={classes.Label}>{props.label}</span>
            <button className={classes.More} onClick={props.addIngredient}>more</button>
            <button className={classes.Less}
                    onClick={props.removeIngredient}
                    disabled={props.isDisabled}
                    >less</button>
        </div>
    );
};

export default buildControl;

