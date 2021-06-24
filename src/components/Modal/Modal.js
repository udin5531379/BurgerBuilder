import React from "react";
import OrderSummary from "../Burger/OrderSummary/OrderSummary";
import classes from './Modal.module.css';
import Aux from '../../hoc/Aux'
import Backdrop from '../../components/Modal/Backdrop/Backdrop'

const modal = (props) => (
    <Aux>
        <Backdrop isBackgroundForModalShown = {props.modalStateFromBurgerBuilder} modelStateHide = {props.modalStateHideFromBurgerBuilder}/>
        <div className={classes.Modal} style={{display: props.modalStateFromBurgerBuilder ? 'table' : 'none'}}>
            <OrderSummary ingredientsFromModal={props.ingredientsFromBurgerBuilder}/>
        </div>
    </Aux>
) 
export default modal;