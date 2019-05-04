import React, {Component} from 'react';
import Person from './Person/Person';
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";


class Persons extends Component {

    render() {
        console.log('[Persons.js] renedering ...');

        return (
            <div>
                {this.props.persons.map((person, index) => {
                    return (
                        <ErrorBoundary key={person.id}>
                            <Person
                                click={() => this.props.clicked(index)}
                                name={person.name}
                                age={person.age}
                                changed={(event) => this.props.changed(event, person.id)}
                            />
                        </ErrorBoundary>
                    )
                })}
            </div>
        )
    }

}

export default Persons;