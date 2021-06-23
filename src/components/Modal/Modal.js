import React from "react";
import OrderSummary from "../Burger/OrderSummary/OrderSummary";
import classes from "./Modal.module.css";

const modal = (props) => (
    <div className={classes.Modal}
        style = {{
            display: props.modalStateFromBurgerBuilder ? 'table' : 'none'
        }}>
        <OrderSummary ingredientsFromModal={props.ingredientsFromBurgerBuilder}/>
    </div>
    
) 

export default modal;