import React from "react";
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems'
import SideDrawer from "../SideDrawer/SideDrawer";


const toolbar = (props) => {
    return(
            <div>
               <header className={classes.all}>
                    <img src='./Images/burger.png' alt='burgerLogo'></img>
                    <nav>
                        <NavigationItems active={true}> Home </NavigationItems>
                        <NavigationItems href={'#'}> Menu </NavigationItems>
                        <NavigationItems href={'#'}> Contact Us </NavigationItems>
                    </nav>
                <p>Happy Eating!</p>
                <SideDrawer/>
                </header>
                <div className={classes.burger} onClick = {() => props.hamBurgerToggler()}>
                    <div  className={ props.stateToAimateHamburgerIcon ? null : classes.line}></div>
                </div>
            </div>
        )
     
} 

export default toolbar;