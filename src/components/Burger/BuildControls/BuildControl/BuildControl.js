import React from 'react'
import classes from '../BuildControl/BuildControl.module.css'

const buildControl = (props) => (
    <div className ={classes.BuildControl}>
        <div>{props.label}</div>
        <button onClick={props.removed} disabled={props.disable}>Less</button>
        <button onClick={props.added}>More</button>
    </div>
)
export default buildControl;
