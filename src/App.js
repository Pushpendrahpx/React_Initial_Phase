import React from 'react';
import './App.css';
import Nav from './components/Navbar'
import Hello from './components/hello'
import Hello1 from './components/hello1'
import StateM from './components/state/state';
import Counter from './components/counter';
import Eventbinding from './components/Eventbinding';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering';
import Listrendering from './components/listrendering';

const App = () => {
  
//   const APP_ID = '97fd2fba';
//   const APP_KEY = 'ed93cb8c0406175b0586ddfdf0d42d9f';
//   const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

//   const [counter,setcounter] = useState(0);

//   useEffect(()=>{
//     getRecipes();
//   })


//   const getRecipes = async ()=>{
//     console.log(url)
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data);
//   }

  return (
    <div>
      {/* <Counter></Counter>
    <Eventbinding></Eventbinding>
    <ParentComponent></ParentComponent>
    <ConditionalRendering /> */}
    <Listrendering />
    </div>
    // <div className='App'>
    //   <StateM></StateM>
    // <Nav></Nav>
    // <Hello name='Vinod' heroName='Amitabh Bachchan'>
    //   <p>Hello, this is Description using Props Children Method</p>
    // </Hello>
    // <Hello name='Pushpendra' heroName='Shahrukh Khan'>
    //   <button className='btn btn-success'>Submit Pushpendra ;) </button>
    // </Hello>
    // <Hello name='Devanshee' heroName='Abhishek Bachchan'></Hello>
    // <Hello1 name='Devanshee' heroName='Abhishek Bachchan'>
    //   <button className='btn btn-danger'>Follow Now !</button>
    // </Hello1>

      /* <form className='form container card'>
        <a className='display-4'>Search Recipe</a>
          <div className='form-group'>
            <input type='text' className='form-control' placeholder='Search Your Recipe Here ...' />
          </div>
          <div className='form-group'>
            <button onClick={()=> setcounter(counter + 1)} 
            type='button' 
            className='btn btn-success btn-block'>
              Submit  {counter}
            </button>
          </div>
      </form> */

    
  )
}

export default App;
