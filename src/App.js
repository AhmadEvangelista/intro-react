import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// This is Hooks function based State
// const app = (props) => {
//   // IF YOU ARE USING  CLASS BASED COMPONENTS STATE YOU CAN USE 1 useState at a time
//   // WHILE FUNCTION BASED STATE YOU CAN USE MULTI STATE
//   // IF YOU ARE USING HOOKS YOU DONT NEED TO USE CLASS BASED COMPONENTS STATE
//   const [personState, setPersonState] = useState({
//     person: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Steohanie', age: 26 },
//     ],
//     otherState: 'some other value',
//   });
//   const [otherState, setOtherState] = useState('some other value');
//   console.log(personState, otherState);
//   const switchNameHandler = () => {
//     // console.log('Was Clicked');
//     // this.state.person[0].namee = 'Max'; DONT USE INSTEAD
//     setPersonState({
//       person: [
//         { name: 'Maximillian', age: 28 },
//         { name: 'Manuel', age: 29 },
//         { name: 'Steohanie', age: 27 },
//       ],
//     });
//   };
//   return (
//     <div className='App'>
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personState.person[0].name}
//         age={personState.person[0].age}
//       />
//       <Person name={personState.person[1].name} age={personState.person[1].age}>
//         My Hobbies: Racing
//       </Person>
//       <Person
//         name={personState.person[2].name}
//         age={personState.person[2].age}
//       />
//     </div>
//   );
//   // Instead of this we use jsx
//   // return React.createElement(
//   //   'div',
//   //   null,
//   //   React.createElement('h1', { className: 'App' }, "Hi, I'm a React App!!!")
//   // );
// };
// export default app;

// This is Class based component state
class App extends Component {
  // IF YOU ARE USING  CLASS BASED COMPONENTS STATE YOU CAN USE 1 useState at a time
  // WHILE FUNCTION BASED STATE YOU CAN USE MULTI STATE
  // IF YOU ARE USING HOOKS YOU DONT NEED TO USE CLASS BASED COMPONENTS STATE
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className='button' onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // Instead of this we use jsx
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
