import React from 'react';
import './Validation.css';

const Validation = (props) => {


    let verificationtext = null;

    if (props.length > 10) {
        verificationtext = "Text too long";
    }
    if (props.length < 5) {
        verificationtext = "Text too short";
    }


    return (
        <div className={"Validation"}>
            {verificationtext}
        </div>
    )
};

export default Validation;