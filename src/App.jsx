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
const [newList, setNewList]=useState([])

//launching useState to load data on loading the page up both for male and female
 useEffect(()=>{
    axios.get(actorsUrl).then((resp)=>{
      setActors(resp.data)
    });
},[])
 useEffect(()=>{
    axios.get(actressesUrl).then((resp)=>{
      setActresses(resp.data)
    });
},[actors])
useEffect(()=>{
  /*merging lists*/ 
  // console.log(actors)
  // console.log(actresses)
  const mergedList = [...actors];
  //this way we eliminate duplicates on id keys and we always work with both lists
  actresses.map((actress)=>{
    actress.id=actors[actors.length - 1].id + actress.id;
    console.log(actress);
    mergedList.push(actress)
    console.log(mergedList);
    
  })
  setNewList(mergedList)  
},[actresses])

  return (
    <>
      <Header/>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3>Casting list</h3>
            </div>
           
            {
              newList.map((actor)=>{
                
                return (
                <div className="col-12 col-lg-6" >
                 
                  <CastCard data={actor} key={actor.id}/>
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
