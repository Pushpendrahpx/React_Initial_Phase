import React from 'react';
const hello = (props)=>{
    console.log(props.name)
    return(
        <div className='container jumbotron'>
            <a href='https://www.google.com'>Hello {props.name} fav. actor is {props.heroName} </a>
            {props.children}
        </div>
       // THis is without using JSX
        // React.createElement('div',{id:'hello',className:'display-4'},React.createElement('a',null,'Hello World'))
    )
}
export default hello;
/* Class -> className
for -> htmlfor

CamelCase property naming convention
  - onclick -> onClick
  - tabindex -> tabIndex
*/