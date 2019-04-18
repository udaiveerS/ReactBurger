import React from 'react';
import classes from './Modal.module.css';
import BackDrop from './../Backdrop/Backdrop'

const modal = (props) => (
    <>
        <BackDrop show={props.show} clicked={props.clicked}/>
        <div className={classes.Modal}
                style={{
                    transform: props.show? 'translateY(0vh)': 'translateY(-100vh)',
                    opacity: props.show? '1': '0'
                }}>
            {props.children}
        </div>
    </>
);

export default modal;