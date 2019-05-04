import React from 'react';
import classes from './Char.css';

const Char = (props) => {
    return (
        <div
            className={classes.Char}
            onClick={() => props.click(props.index)}
        >
            {props.char}
        </div>
    )
};

export default Char