import React from "react";
import Aux from '../../../hoc/Aux'
import classes from './OrderSummary.module.css'

const orderSummary = (props) => {
    const orderSummaryList = Object.keys(props.ingredientsFromModal).map((eachIngredients) => {
        return(
            <li key={eachIngredients} className={classes.li}>
                <span className={classes.span}>{eachIngredients}</span>: {props.ingredientsFromModal[eachIngredients]}
            </li>
        ) 
    })
    return(
        <Aux>
            <h2 className={classes.h2}>Here are the things you ordered:</h2>
            <ul className={classes.ul}>
                {orderSummaryList}
            </ul>
        </Aux>
    )

}

export default orderSummary