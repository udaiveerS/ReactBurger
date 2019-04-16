import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'}
];

const buildControls = (props) => {

    const buildControls = controls.map((controlOption, index) => {
        return <BuildControl label={controlOption.type}/>
    });

    return (
        <div className={classes.BuildControls}>
            {buildControls}
        </div>
    )
};

export default buildControls;
