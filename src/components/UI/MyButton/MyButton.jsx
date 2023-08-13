import react, {useState} from 'react';
import classes from './Mybutton.module.css'

function MyButton(props) {
    return (
        <button {...props} className={classes.myButton}>{props.children}</button>
    )
}

export default MyButton;