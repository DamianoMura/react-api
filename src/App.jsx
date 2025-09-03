import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Header from '../components/Header'
import CastCard from '../components/CastCard';


//actresses endpoint 
 const actressesUrl= "https://lanciweb.github.io/demo/api/actresses/";
//actors endpoint
 const actorsUrl="https://lanciweb.github.io/demo/api/actors/";
function App() {
//setting state variable for actors
const [actors,setActors]=useState([]);
//setting state variable for actresses
const [actresses,setActresses]=useState([]);

//launching useState to load data on loading the page up both for male and female
 useEffect(()=>{
    axios.get(actorsUrl).then((resp)=>{
      setActors(resp.data)
      console.log(resp.data)
    });
},[])
 useEffect(()=>{
    axios.get(actressesUrl).then((resp)=>{
      setActresses(resp.data)
      console.log(resp.data)
    });
},[])
  return (
    <>
      <Header/>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3>Casting list</h3>
            </div>
            <div className="col-12 bg-body-secondary text-center">
              <h6>Male Casting</h6>
            </div>
            {
              actors.map((actor)=>{
                return (
                <div className="col-12 col-lg-6" >
                  {/* i go straight away to create my card components */}
                  <CastCard data={actor} key={actor.id}/>
                </div>  
                )
              })
            }
             <div className="col-12 bg-body-secondary text-center">
              <h6>Female Casting</h6>
            </div>
            {
              actresses.map((actress)=>{
                return (
                <div className="col-12 col-lg-6" >
                  {/* i go straight away to create my card components */}
                  <CastCard data={actress} key={actress.id}/>
                </div>  
                )
              })
            }
            </div>
          </div>
        
      </main>
    </>
  )
}

export default App
