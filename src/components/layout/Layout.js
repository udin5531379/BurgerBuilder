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
        this.setState({sideDrawerShow: true})
    }

    render() {
        return(
            <Aux>
                <Toolbar sideDrawerShown = {this.sideDrawerShowState}/>
                <SideDrawer/>
                <div className = {classes.Content}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
    
}

export default Layout;