import React, {Component} from 'react';
import Person from './Person/Person';
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";


class Persons extends Component {

    // static getDerivedStateFromProps(props, state) {
    //     console.logs('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }


    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        if (nextProps.persons !== this.props.persons) {
            return true;
        } //look out, it's a shallow reference check!!
        return false;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('[Persons.js] componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }


    render() {
        console.log('[Persons.js] renedering ...');

        return (
            <React.Fragment>
                <div>
                    {this.props.persons.map((person, index) => {
                        return (
                            <ErrorBoundary key={person.id}>
                                <Person
                                    click={() => this.props.clicked(index)}
                                    name={person.name}
                                    age={person.age}
                                    changed={(event) => this.props.changed(event, person.id)}
                                    isAuth={this.props.isAuthenticated}
                                />
                            </ErrorBoundary>
                        )
                    })}
                </div>
                <div>hallo</div>
            </React.Fragment>
        )
    }

}

export default Persons;