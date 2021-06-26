import React from "react";
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = () => {
    return(
        <header className={classes.all}>
            <img src='./Images/burger.png' alt='burgerLogo'></img>
            <nav>
                <NavigationItems active={true}> Home </NavigationItems>
                <NavigationItems href={'#'}> Menu </NavigationItems>
                <NavigationItems href={'#'}> Contact Us </NavigationItems>
            </nav>
            <p>Happy Eating!</p>
            <div className={classes.burger}>
                <div className={classes.line1}></div>
                <div className={classes.line2}></div>
                <div className={classes.line3}></div>
                
            </div>

        </header>
    )
} 

export default toolbar;