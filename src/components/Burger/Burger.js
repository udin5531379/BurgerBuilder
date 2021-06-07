import React from 'react';
import classes from '../Burger/Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    
    let transformedIngredients = Object.keys(props.ingredients).map(eachIngredients => {
        return [...Array(props.ingredients[eachIngredients])].map((_, i)=> {
            return <BurgerIngredient key={eachIngredients + i} type={eachIngredients}/>
        })
    }).reduce((accumulator, initialValue) => {
        console.log(initialValue);
        return accumulator.concat(initialValue)
    }, [])

    console.log(transformedIngredients);

    if (transformedIngredients.length === 0){
        transformedIngredients = <p className={classes.NoIngredients}>Please start adding ingredients</p>
    }
    
    return (
        // Each ingredient is inside a div
        <div className = {classes.Burger}>
            {/* "type" props being passed as a prop inside BurgerIngredient */}
            <BurgerIngredient type="bread-top"/> 
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;