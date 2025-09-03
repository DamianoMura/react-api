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
//merged list of actors and actresses
const [newList, setNewList]=useState([])
//thhis represents the list selected by the buttons for genders
const [selectedList, setSelectedList]= useState([])
//thhis represents the search input field
const [search, setSearch]= useState([])

// state variable to keep track to what to show based on the select in the header
const [headerState, setHeaderState] =useState("all");
// state variable to keep the updatedList as a state 
const [updatedList, setUpdatedList] =useState(selectedList);

//launching useState to load data on loading the page up both for male and female
 useEffect(()=>{
    axios.get(actorsUrl).then((resp)=>{
      setActors(resp.data)
    });
},[])
 useEffect(()=>{
    axios.get(actressesUrl).then((resp)=>{
      setActresses(resp.data)
      
      /*merging lists*/ 
      const mergedList = [...actors];

      actresses.map((actress)=>{
        actress.id=actors[actors.length - 1].id + actress.id;
        mergedList.push(actress)
      });

      setNewList(mergedList);
      setSelectedList([...mergedList])
    });
},[actors])

const handleClick= (e) =>{
  e.preventDefault();
  setHeaderState(e.target.value);
  e.target.value==="male" ? setSelectedList([...actors]) :
  e.target.value==="female" ? setSelectedList([...actresses]):
  setSelectedList([...newList])
                        
}

const handleChange = (e) => {
  e.preventDefault();
  setSearch(e.target.value);
  //function to sort actors

}

useEffect(()=>{
  let updatedList=[];
  
  
  if(search){
    updatedList=selectedList.filter((actor) => actor.name.toLowerCase().includes(search.toLowerCase()))
    setUpdatedList([...updatedList])
  }
  
  


 },[search,headerState])
  return (
    <>
      <Header/>
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 ">
              
                <div className="option-bar">
                  <ul className="list-unstyled d-flex text-center ">
                    <li>
                      <button 
                        className="cast-sort"
                        onClick={handleClick}
                        value="male"
                      >
                        Actors
                      </button>
                    </li>
                    <li>
                      <button 
                        className="cast-sort"
                        onClick={handleClick}
                        value="female"
                      >
                        Actresses
                      </button>
                    </li>
                    <li>
                      <button 
                        className="cast-sort"
                        onClick={handleClick}
                        value="all"
                      >
                        All
                      </button>
                    </li>
                  </ul>
                  <input type="text" 
                         placeholder="Search by Name"
                         id="search"
                         value={search}
                         onChange={handleChange}/>
                         
                </div>
            </div>
            <div className="col-2">
              <div className="sidebar">
                <h6 className='list-title'>{headerState} actors list</h6>
                <ul>
                  {
                    updatedList.map((actor)=>{
                      
                      return (
                      <li key={actor.id}> {actor.name}</li>
                      
                      )
                    })
                  }
                  
                </ul>
              </div>
            </div>
         
        
        
          
        
            <div className="col-10">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <h3 className='list-title'>{headerState} Actor Cards</h3>
                  </div>
                  {
                    updatedList.map((actor)=>{
                      
                      return <CastCard data={actor} key={actor.id}/>
                      
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        







        
        
      </main>
    </>
  )
}

export default App
