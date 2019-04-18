import React from 'react';
import classes from './Layout.module.css'
import ToolBar from './../Nav/ToolBar/ToolBar'

const layout = (props) => (
    <>
        <ToolBar/>
        <div>Sidebar, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </>
);

export default layout;

