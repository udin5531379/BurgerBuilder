import React from "react";
import classes from './Toolbar.module.css';


const toolbar = (props) => {
    return(
        <header className={classes.all}>
            <img src='./Images/burger.png' alt='burgerLogo'></img>
            <nav>
                <ul className = {classes.nav__links}>
                    <li><a href={'#'}>HOME</a></li>
                    <li><a href={'#'}>MENU</a></li>
                    <li><a href={'#'}>CONTACT US</a></li>
                </ul>
            </nav>
            <p>Happy Eating!</p>

        </header>
    )
} 

export default toolbar;