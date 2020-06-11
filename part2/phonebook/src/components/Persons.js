import React from 'react';

const Persons = ({ persons, filterVal }) => {
    return (
        <ul>
            {persons.filter((person)=>
            (person.name).includes(filterVal)).map((person) => 
            <li key={person.name}>{person.name} {person.number}</li>
            )}
      </ul>
    );
};

export default Persons;