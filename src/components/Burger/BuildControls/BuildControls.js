import React from 'react';
import classes from '../BuildControls/BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
// import cheese from '../../../Images/cheese.png'
// import lettuce from '../../../Images/lettuce.png'
// import meat from '../../../Images/meat.png'
// import bacon from '../../../Images/bacon.png'


const controls = [
    {label: 'Chesee', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Meat', type: 'meat'},
    {label: 'Salad', type: 'salad'}
]

    

const buildContols = (props) => (
        <div className={classes.BuildControls}>
            {controls.map((eachControls) => (
                <BuildControl 
                    key={eachControls.label} 
                    label={eachControls.label} 
                    added={() => props.ingredientAdded(eachControls.type)}
                    removed={() => props.ingredientRemoved(eachControls.type)}
                    disable = {props.disable[eachControls.type]}
                    />
            ))}
            
        </div>
    )

export default buildContols;
