import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header'


//actresses endpoint 
 const actressesUrl= "https://lanciweb.github.io/demo/api/actresses/";
//actors endpoint
 const actorsUrl="https://lanciweb.github.io/demo/api/actors/";
function App() {
//setting state variable for actors
const [actors,setActors]=useState([]);
//setting state variable for actresses
const [actress,setActress]=useState([]);

  return (
    <>
      <Header/>
      <main>
        
      </main>
    </>
  )
}

export default App
