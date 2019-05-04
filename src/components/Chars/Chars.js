import React from 'react';

import Validation from "../Validation/Validation";
import Char from "../Chars/Char/Char";


const Chars = (props) => {

    let charList = null;
    if (props.text != null && props.text.length > 0) {
        const charArray = props.text.split('');

        charList = charArray.map((char, index) => {
            return <Char
                char={char}
                index={index}
                click={() => props.deleted(index)}/>
        });
    }



    return (
        <div>
            <input onChange={props.validate} value={props.text}/>
            <Validation length={props.text.length}/>
            <div>
                {charList}
            </div>
        </div>

    );
}

export default Chars;