import React, {useEffect, useRef} from 'react';


import classes from "./Cockpit.css";
import Chars from "../Chars/Chars";
import AuthContext from "../../context/auth-context";

const Cockpit = (props) => {

    const toggleBtnRef = useRef(null);


    useEffect((create, input) => {
        console.log('[Cockpit.js] useEffect');
        //http requesr...
        // setTimeout(() => {
        //     //alert('Saved data to cloud');
        // }, 1000);

        toggleBtnRef.current.click();

    }, []);


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
            <button
                className={btnClass}
                onClick={props.toggle}
                ref={toggleBtnRef}>Show Person
            </button>
            <AuthContext.Consumer>
                {context =>    <button onClick={context.login}>Login</button>}
            </AuthContext.Consumer>


        </div>
    );
}

export default Cockpit;