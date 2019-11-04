import React from 'react';
import Person from './Person';

function listrendering(props) {
    const names = ["Pushpendra","Vinod","Shiven"];
    const person = [{
        id:1,
        name:'Pushpendra',
        age:18,
        skill:'ANgular'
    },{
        id:2,
        name:'Vinod',
        age:19,
        skill:'C++ Libraries'
    },{
        id:3,
        name:'Shiven',
        age:18,
        skill:'React'
    }];
    const nameList = names.map(name=><div className='lead'>{name}</div>);
    const data = person.map((person)=>(
        <Person key={person.id} person={person} />
    ));
    return (
        <div>
          {data}
        </div>
    );
}

export default listrendering;