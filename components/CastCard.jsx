import React from 'react'

const CastCard = (props) => {
const {awards, 
       biography,
       birth_year,
       death_year,
       image,
       known_for,
       most_famous_movies,
       name,
       nationality
      }=props.data;  
  return (
  <div className="col-12 col-lg-6" >
    <div className="card mt-4">
      <div className="card-header d-flex justify-content-between p-3">
        <h4>{name}</h4> 
        <span>{nationality} - {birth_year}/{death_year ? death_year : " Living "}</span>
      </div>
      <div className="card-body">
        <div className="cast-info d-flex">
           <img src={image} alt="" /> 
          <div className="bio p-3">
            <h5>Biography : </h5>
            <p>{biography}</p>
          </div>
        </div>
        <div className="cast-bio">
          
          <div className="info">
            <h6 className="mt-2 fw-bold">Awards : </h6>
            <ul className="list-unstyled d-flex">
             { Array.isArray(awards) && awards.length>0 
                        ? awards.map((award,index)=>{
                           return <li className='me-4' key={index}> { award } 
                 </li>
                         })
                         :<li> {awards}</li>}
            </ul>
             {known_for ? <> <h6 className="mt-2 fw-bold">Known For : </h6>
            <ul className="list-unstyled d-flex">
             { Array.isArray(known_for) && known_for.length>0 
                        ? known_for.map((movie,index)=>{
                           return <li className='me-4' key={index}> { movie } 
                 </li>
                         })
                         :<li> {known_for}</li>}
            </ul></>
             
            : most_famous_movies ? <><h6 className="mt-2 fw-bold">Known For : </h6>
            <ul className="list-unstyled d-flex">
             { Array.isArray(most_famous_movies) && most_famous_movies.length>0 
                        ? most_famous_movies.map((movie,index)=>{
                           return <li className='me-4' key={index}> { movie } 
                 </li>
                         })
                         :<li> {most_famous_movies}</li>}
            </ul></> : <></>}
            
          </div>
        </div>
      </div>
    </div>
  </div> 
  )
}

export default CastCard
