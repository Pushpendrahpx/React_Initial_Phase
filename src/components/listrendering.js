import React from 'react';

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
    const data = person.map((person)=>(
        <div className=' container'>
            <div className='card'>
            <div className='card-header'>{person.name}</div>
            <div className='card-body'>I have done specialization in {person.skill} and I'm {person.age} years old.</div>
        
            </div>
          </div>
    ));
    return (
        <div>
          {data}
        </div>
    );
}

export default listrendering;