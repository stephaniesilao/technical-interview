import {useState} from 'react';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';



function App() {

  const [header, setHeader] = useState("Guest");
  const[counter,setCounter] = useState(0);
  const [footer, setFooter] = useState("© copyright 2024 . All rights Reserved");




  return (
    <>
    <h1 className="title">Welcome, {header}</h1>
<main className="card " style={{width:"18rem",position:'absolute',left:'40%',top:'20%'}}>
  <div className="card-body " style={{backgroundColor:"black"}}>
  <h1 className="count">Count Display</h1>
    <h1 className="counter" >{counter}</h1>

<div className="button">
<button className="button1" onClick = {() =>{
      setCounter(counter+1)
    }}>
      Increment +
    </button>
  
    <button className="button2" onClick = {() =>{

      {
        (setCounter(0))
      }
    }}>
    Reset
    </button>

    { counter % 2 == 0 ? ( <h1  style={{color:"green",fontWeight:"700",paddingTop:"30px"}} >It is even</h1>) : (null) 
         }
  </div>

   
</div>
    
</main>
   
   
    <footer className="footer">{footer}</footer>
    </>
  
  )
}

   
  
  

export default App
