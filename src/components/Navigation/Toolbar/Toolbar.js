import React from "react";
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems'
import SideDrawer from "../SideDrawer/SideDrawer";
import classes1 from '../../Navigation/SideDrawer/SideDrawer.module.css'

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
                <div className = {classes.burgerDiv}>
                    <div className={classes.burger} onClick={props.sideDrawerShown ? classes1.Open : classes1.Close} >
                        <div className={classes.line1}></div>
                        <div className={classes.line2}></div>
                        <div className={classes.line3}></div>
                    </div>
                </div>
            </div>
        )
     
} 

export default toolbar;