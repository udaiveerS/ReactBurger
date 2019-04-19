import React, {Component} from 'react';
import classes from './Modal.module.css';
import BackDrop from './../Backdrop/Backdrop'

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.show;
    }

    render() {
        return (
            <>
                <BackDrop show={this.props.show} clicked={this.props.clicked}/>
                <div className={classes.Modal}
                     style={{
                         transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                         opacity: this.props.show ? '1' : '0'
                     }}>
                    {this.props.children}
                </div>
            </>
        );
    }
}

export default Modal;