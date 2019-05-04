//import React, {Component} from 'react';

import React, {Component} from 'react';
import classes from './App.css';
import Person from './Person/Person.js'
import Validation from "./Validation/Validation";
import Char from "./Char/Char";


class App extends Component {

    state = {
        persons: [
            {id: 'dsds', name: 'Max', age: 29},
            {id: 'dds', name: 'Manu', age: 11},
            {id: 'dsdsdds', name: 'Stephanie', age: 13},

        ],
        text: ''
    }


    nameChangedHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {...this.state.persons[personIndex]};

        person.name = event.target.value;

        const persons = [...this.state.persons];

        persons[personIndex] = person;
        this.setState({persons: persons});

    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    togglePerson = () => {
        console.log("togglePerson called");
        const personshown = this.state.showPersons;
        this.setState({showPersons: !personshown});
    }

    validateTextHandler = (event) => {
        this.setState({text: event.target.value});
    }

    deleteCharHandler = (index) => {

        const charArray = this.state.text.split('');
        charArray.splice(index, 1);
        const newText = charArray.join('');
        this.setState({text: newText});
    }


    render() {

        let persons = null;
        let btnClass = null;

        console.log(this.state.showPersons);

        if (this.state.showPersons === true) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                        />
                    })}
                </div>
            );

            btnClass = classes.Red;

        }

        const assignClasses = [];

        if (this.state.persons.length <= 2) {
            assignClasses.push(classes.red);
        }

        if (this.state.persons.length <= 1) {
            assignClasses.push(classes.bold);
        }

        const classtext = assignClasses.join(' ');


        let charList = null;
        if (this.state.text != null && this.state.text.length > 0) {
            const charArray = this.state.text.split('');

            charList = charArray.map((char, index) => {
                return <Char char={char} index={index} click={() => this.deleteCharHandler(index)}/>
            });
        }

        return (
            <div className={classes.App}>
                <h1>Hi, I'm a react app </h1>
                <p className={classtext}>it works! </p>

                <input onChange={this.validateTextHandler} value={this.state.text}/>
                <Validation length={this.state.text.length}/>
                <div>
                    {charList}
                </div>
                {/*<button className='Button' onClick={() => this.switchNameHandler('Manuelllee')}>Switch Name</button>*/}
                <button className={btnClass} onClick={this.togglePerson}>Show Person</button>
                {persons}
            </div>
        );
    }
}

export default App;


// import React, {useState} from 'react';
// import './App.css';
// import Person from './Person/Person.js'
// //function components using hooks to get the state
// const App = (props) => {
//     const [personsState, setPersonsState] = useState({
//         persons: [
//             {name: 'Max', age: 29},
//             {name: 'Manu', age: 11},
//             {name: 'Stephanie', age: 13}
//
//         ]
//     });
//
//     const [otherState, setOtherState] = useState('some other value');
//
//     console.log(personsState, otherState);
//
//
//     const switchNameHandler = () => {
//         //console.log('Was Clicked');
//         // DON?T DO THIS: this.state.persons[0].name = 'Maximilian';
//         setPersonsState({ persons: [
//                 {name: 'Max', age: 29},
//                 {name: 'Manuelle', age: 11},
//                 {name: 'Stephanie', age: 29}
//
//             ]});
//     }
//
//     return (
//         <div className="App">
//             <h1 className="App">Hi, I'm a react app </h1>
//             <button onClick={switchNameHandler}>Switch Name</button>
//             <Person name ={personsState.persons[0].name} age={personsState.persons[0].age}/>
//             <Person name ={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Racing </Person>
//             <Person name ={personsState.persons[2].name} age={personsState.persons[2].age}/>
//
//         </div>
//     );
// }
//
// export default App;
