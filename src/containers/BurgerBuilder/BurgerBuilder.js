import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger  from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import classes from "../BurgerBuilder/BurgerBuilder.module.css";
import Modal from "../../components/Modal/Modal";

//GLOBAL_VARIABLE
const INGREDIENT_PRICES = {
    salad: 1,
    cheese: 0.5,
    meat: 2,
    bacon: 3
}


class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice : 4,
        orderNowButtonEnableOrDisableState: false,
        modalShow: false
    }

    updateOrderNowButtonState = (burgerComponents) => {
        const sumOfAllBurgerIngredients = Object.keys(burgerComponents).map((comp)=> {
            return burgerComponents[comp]
        }).reduce((accumulator, initialValue) => {
            return accumulator + initialValue
        }, 0)

        this.setState({orderNowButtonEnableOrDisableState: sumOfAllBurgerIngredients > 1})
    }

    addIngredientsHandler = (type) => {
        const currentIngredientCount = this.state.ingredients[type] //key value pair ko value nikalyo acc. to type 
        const updatedIngredientCount = currentIngredientCount + 1 //tyo valu ema 1 add garyo 
        const updatedIngredient = {
            ...this.state.ingredients   //Use all the properties on this.state.ingredients to create a new object ie. updatedIngredient, then set the property represented by [type] to a new value passed on event.target.value
        }
        updatedIngredient[type] = updatedIngredientCount

        const currentPrice = this.state.totalPrice
        const updatedPrice = currentPrice + INGREDIENT_PRICES[type]

        this.setState({ingredients: updatedIngredient, totalPrice: updatedPrice})
        this.updateOrderNowButtonState(updatedIngredient)
    }

    removeIngredientsHandler = (type) => {
        console.log("Current Price", this.state.currentPrice);
        if (this.state.ingredients[type] > 0) {
            const updatedIngredientCount = this.state.ingredients[type] - 1
            const updatedIngredient = {
                ...this.state.ingredients
            }
            updatedIngredient[type] = updatedIngredientCount

            const currentPrice = this.state.totalPrice - INGREDIENT_PRICES[type]
            console.log("Updated Price",currentPrice)

            this.setState({ingredients: updatedIngredient, totalPrice: currentPrice})
            this.updateOrderNowButtonState(updatedIngredient)
        }
    }

    orderSummaryShow = () => {
        this.setState({modalShow: true})
    }

    orderSummaryHide = () => {
        this.setState({modalShow: false})
    }

    render(){

        const disabledInfo = {
            ...this.state.ingredients //immutable way ma naya object create garyo 
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            <Aux>
                <Burger ingredients = {this.state.ingredients}/>

                <Modal 
                ingredientsFromBurgerBuilder = {this.state.ingredients}
                modalStateFromBurgerBuilder = {this.state.modalShow}
                modalStateHideFromBurgerBuilder = {this.orderSummaryHide}
                />
                

                <BuildControls 
                ingredientAdded = {this.addIngredientsHandler} 
                ingredientRemoved = {this.removeIngredientsHandler}
                disable = {disabledInfo}/>

                <div className={classes.TotalPriceOrderNowButton} >
                    Total Price: {this.state.totalPrice}$
                    <button onClick={this.orderSummaryShow} disabled={!this.state.orderNowButtonEnableOrDisableState}>Order Now!</button>
                </div>
            </Aux>
        );
    }
}

export default BurgerBuilder;