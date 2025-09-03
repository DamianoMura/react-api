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

//launching useState to load data on loading the page up both for male and female
 useEffect(()=>{
    axios.get(actorsUrl).then((resp)=>{
      setActors(resp.data)
      console.log(resp.data)
    });
    axios.get(actressUrl).then((resp)=>{
      setActress(resp.data)
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
            <div className="col-12-col-lg-6">
              <div className="card">
                <div className="card-header">
                name nationality birth_year/death_year
                </div>
                <div className="card-body">
                  <div className="cast-info">
                    img 
                    <div className="info">
                      awards known_for
                    </div>
                  </div>
                  <div className="cast-bio">

                  </div>
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
