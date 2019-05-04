import React, {Component} from 'react';
import classes from './Person.css';


class Person extends Component {

    render() {

        console.log('[Person.js] renedering ...');

        const rnd = Math.random();
        if (rnd > 0.7) {
            // throw new Error('Something went wrong');
        }

        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old {this.props.child}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }
};

export default Person;

//below the function based component
// const Person = (props) => {
//
//     console.log('[Person.js] renedering ...');
//
//     const rnd = Math.random();
//     if (rnd > 0.7) {
//         // throw new Error('Something went wrong');
//     }
//
//
//     return (
//         <div className={classes.Person}>
//             <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old {props.child}</p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changed} value={props.name}/>
//         </div>
//     )
// };
//
// export default Person;
