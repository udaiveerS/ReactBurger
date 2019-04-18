import React from 'react';
import Button from './../UI/Button/Button'
const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
        return (
            <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
        )
    });
    return (
        <>
            <h3>Your Order</h3>
            <p>Your item breakdown/</p>
            {ingredientSummary}
            <p>Continue to checkout?</p>
            <p>Total Price:<strong> ${props.price.toFixed(2)}</strong></p>
            <Button buttonType={"Danger"} clicked={props.purchaseCancel}>Cancel</Button>
            <Button buttonType={"Success"} clicked={props.purchaseContinue}>Continue</Button>
        </>
    )

};

export default orderSummary;