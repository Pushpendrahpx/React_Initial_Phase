import React from 'react';

function Person({person}) {
    return (
        <div className='container'>

            <div className='card'>
                <div className='card-header'>{person.name}</div>
                <div className='card-body'>I have done specialization in {person.skill} and I'm {person.age} years old.</div>
        
            </div>
          </div>
    );
};

export default Person;