import React from 'react'

const CastCard = (props) => {
const {awards, 
       biography,
       birth_year,
       death_year,
       image,
       known_for,
       name,
       nationality
      }=props.data;  
  return (
    <div className="card mt-4">
      <div className="card-header d-flex justify-content-between p-3">
        <h4>{name}</h4> 
        <span>{nationality} - {birth_year}/{death_year ? death_year : " Living "}</span>
      </div>
      <div className="card-body">
        <div className="cast-info d-flex">
           <img src={image} alt="" /> 
          <div className="info p-3">
            <h5>Biography : </h5>
            <p>{biography}</p>
          </div>
        </div>
        <div className="cast-bio">
          
          <div className="info">
            <h6 className="mt-2 fw-bold">Awards : </h6>
            <ul className="list-unstyled d-flex">
             { Array.isArray(awards) && awards.length>0 
                        ? awards.map((award)=>{
                           return <li className='me-4'> { award } 
                 </li>
                         })
                         :<li> {awards}</li>}
            </ul>
             
            <h6 className="mt-2 fw-bold">Known For : </h6>
            <ul className="list-unstyled d-flex">
             { Array.isArray(known_for) && known_for.length>0 
                        ? known_for.map((movie)=>{
                           return <li className='me-4'> { movie } 
                 </li>
                         })
                         :<li> {awards}</li>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CastCard
