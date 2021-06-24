import React from "react";
import classes from './Backdrop.module.css'

const backdrop = (props) => (
    props.isBackgroundForModalShown ? <div className = {classes.Backdrop} onClick = {props.modelStateHide}></div> : null
)

// '()' bracket bhayo bhaney return statement halnu pardaina

export default backdrop