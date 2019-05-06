import React, {Component} from 'react';
import classes from './Person.css';
import AuthContext from '../../../context/auth-context';


class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        //this.inputElement.focus();

        this.inputElementRef.current.focus();
    }

    render() {

        console.log('[Person.js] renedering ...');

        console.log('this.props.isAuth is ' + this.props.isAuth);

        const rnd = Math.random();
        if (rnd > 0.7) {
            // throw new Error('Something went wrong');
        }

        return (
            <div className={classes.Person}>
                <AuthContext.Consumer>
                    {context =>
                        context.authenticated ? <p>Autenticated! </p> : <p>Please log in! </p>
                    }
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years
                    old {this.props.child}</p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                    //ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                />
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
