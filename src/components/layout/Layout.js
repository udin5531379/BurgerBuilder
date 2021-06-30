import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'


class Layout extends Component{

    state = {
        sideDrawerShow : false
    }
    
    sideDrawerShowState = () => {
        this.setState({sideDrawerShow: !true})
    }

    sideBarToggler = () => {
        this.setState((previousState) => {
            return ({sideDrawerShow : !previousState.sideDrawerShow})
        })
    }

    render() {
        return(
            <Aux>
                <Toolbar hamBurgerToggler = {this.sideBarToggler} stateToAimateHamburgerIcon = {this.state.sideDrawerShow}/>
                <SideDrawer open = {this.state.sideDrawerShow} modelStateHideFromLayoutComponent = {this.sideDrawerShowState}/>
                <div className = {classes.Content}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
    
}

export default Layout;