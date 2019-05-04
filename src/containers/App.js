//import React, {Component} from 'react';

import React, {Component} from 'react';
import classes from './App.css';

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";


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

        console.log(this.state.showPersons);

        if (this.state.showPersons === true) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
            />
        }


        return (
            <div className={classes.App}>
                <Cockpit
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    text={this.state.text}
                    deleted={this.deleteCharHandler}
                    validate={this.validateTextHandler}
                    toggle={this.togglePerson}
                />
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
