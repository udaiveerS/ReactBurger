import React, {Component} from 'react';
import classes from './Layout.module.css'
import ToolBar from './../Nav/ToolBar/ToolBar'
import SideDrawer from './../Nav/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    toggleSideDrawer = () => {
        this.setState((prevState) => { return {showSideDrawer: !prevState.showSideDrawer}});
    };

    render() {
        return (
            <>
                <ToolBar toggleSideDrawer={this.toggleSideDrawer}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </>
        );
    }
}

export default Layout;

