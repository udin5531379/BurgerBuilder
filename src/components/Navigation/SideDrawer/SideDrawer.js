import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'

 const sideDrawer = (props) => {
    return (
        <div className={classes.SideDrawer}>
            <img src='./Images/burger.png' alt='burgerLogo'></img>
            <nav>
                <div><NavigationItems sidebar = {true} active={true}>Home</NavigationItems></div>
                <div><NavigationItems sidebar = {true}>Menu</NavigationItems></div>
                <div><NavigationItems sidebar = {true}>Contact Us</NavigationItems></div>
            </nav>
            <p>Created by <div>Udin Rajkarnikar</div> 2021</p>
        </div>
    )
}

export default sideDrawer
