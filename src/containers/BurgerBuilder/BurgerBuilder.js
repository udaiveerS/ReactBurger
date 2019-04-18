import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';
import Modal from './../../components/UI/Modal/Modal';
import OrderSummary from './../../components/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 1,
    cheese: 0.4,
    meat: 1.3,
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4.00,
        purchasable: false,
        purchasing: false
    };

    purchaseHandler = () => {
        this.setState({purchasing: true});
    };

    purchaseCancel = () => {
        this.setState({purchasing: false});
    };

    purchaseContinue = () => {
        alert("you continue");
    };

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map((ingredientLabel) => ingredients[ingredientLabel])
            .reduce((prev, currVal) => prev + currVal, 0);

        this.setState({purchasable: sum > 0});
    };

    addIngredient = (ingredientType) => {
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[ingredientType];
        const newState = {
            ingredients: {...this.state.ingredients},
            totalPrice: newPrice
        };
        newState.ingredients[ingredientType] = newState.ingredients[ingredientType] + 1;
        this.setState(newState);
        this.updatePurchaseState(newState.ingredients);
    };

    removeIngredient(ingredientType) {
        if (this.state.ingredients[ingredientType] === 0) return;
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[ingredientType];
        const newState = {
            ingredients: {...this.state.ingredients},
            totalPrice: newPrice
        };

        newState.ingredients[ingredientType] = newState.ingredients[ingredientType] - 1;
        this.setState(newState);
        this.updatePurchaseState(newState.ingredients);
    }


    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls addIngredient={this.addIngredient}
                               disabledInfo={disabledInfo}
                               price={this.state.totalPrice}
                               purchasable={this.state.purchasable}
                               purchaseHandler={this.purchaseHandler}
                               removeIngredient={this.removeIngredient}/>
                <Modal show={this.state.purchasing}
                       clicked={this.purchaseCancel}>
                    <OrderSummary
                        purchaseCancel={this.purchaseCancel}
                        price={this.state.totalPrice}
                        purchaseContinue={this.purchaseContinue}
                        ingredients={this.state.ingredients}/>
                </Modal>
            </>
        )
    }
}

export default BurgerBuilder;

