import React from 'react';
import DisplayName from './Components/DislayName/DisplayName';
import NameList from './Components/NameList/NameList';
import AlertUser from './Components/AlertUser/AlertUser';

function App() {
    const state = {
        person: {
            firstName: 'Reggie',
            lastName: 'White'
        },

        names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],

        superheroes: [
            {
                superheroId: 1,
                name: 'Batman',
                primaryAbility: 'Wealthy',
                secondarAbility: 'Rich'
            },
            {
                superheroId: 2,
                name: 'Superman',
                primaryAbility: 'Super strength',
                secondarAbility: 'Fly'
            },
            {
                superheroId: 3,
                name: 'Spiderman',
                primaryAbility: 'Spider senses',
                secondarAbility: 'Shoots web'
            }
        ]
    }

    const displayAlert = () => {
        alert('devCodeCamp');
    }

    return (
        <div className="App">
            <DisplayName firstName={state.person.firstName} lastName={state.person.lastName}/>
            <NameList names={state.names}/>
            <AlertUser alertMe={displayAlert}/>
            {/* <SuperHeroesTable heroes={state.superheroes}/> */}
        </div>
    );
}

export default App;