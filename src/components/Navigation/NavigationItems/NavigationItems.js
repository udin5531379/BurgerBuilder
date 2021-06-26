import React from 'react'
import classes from '../Toolbar/Toolbar.module.css'

const navigationItems = (props) => {
    return (
        <ul className = {classes.nav__links}>
            <li><a href={props.href} className={props.active ? classes.active : null}>{props.children}</a></li>
        </ul>
    )
}

export default navigationItems