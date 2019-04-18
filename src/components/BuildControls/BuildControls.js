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

    const buildControls = controls.map((controlOption) => {
        return <BuildControl key={controlOption.label} label={controlOption.type}
                             addIngredient={() => props.addIngredient(controlOption.type)}
                             removeIngredient={() => props.removeIngredient(controlOption.type)}
                             isDisabled={props.disabledInfo[controlOption.type]}
        />
    });

    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {buildControls}
            <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.purchaseHandler}>Order Now!</button>
        </div>
    )
};

export default buildControls;
