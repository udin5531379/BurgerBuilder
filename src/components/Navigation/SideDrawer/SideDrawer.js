import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
import Aux from '../../../hoc/Aux'
import Backdrop from "../../Modal/Backdrop/Backdrop";

 const sideDrawer = (props) => {
    return (
        <Aux>
            <Backdrop isBackgroundForModalShown = {props.open} modelStateHide = {props.modelStateHideFromLayoutComponent}/>
            <div className={props.open ? [classes.SideDrawer, classes.Open].join(' ') : [classes.SideDrawer, classes.Close].join(' ')}>
                <img src='./Images/burger.png' alt='burgerLogo'></img>
                    <nav>
                        <div><NavigationItems sidebar = {true} active={true}>Home</NavigationItems></div>
                        <div><NavigationItems sidebar = {true}>Menu</NavigationItems></div>
                        <div><NavigationItems sidebar = {true}>Contact Us</NavigationItems></div>
                    </nav>
                <p>Created by <div>Udin Rajkarnikar</div> 2021</p>
            </div>
        </Aux>
        
    )
}

export default sideDrawer
