import React from 'react';


import classes from "./Cockpit.css";
import Chars from "../Chars/Chars";

const Cockpit = (props) => {


    let btnClass = null;
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    const assignClasses = [];
    if (props.persons.length <= 2) {
        assignClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignClasses.push(classes.bold);
    }

    const classtext = assignClasses.join(' ');

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classtext}>it works! </p>

            <Chars
                text={props.text}
                deleted={props.deleted}
                validate={props.validate}
            />
            <button className={btnClass} onClick={props.toggle}>Show Person</button>
        </div>
    );
}

export default Cockpit;