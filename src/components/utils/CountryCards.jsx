import React from 'react'
import { NavLink } from 'react-router-dom';

const CountryCards = ({country}) => {

    const {flags , name , population , 
region, capital } = country;
  return (
    <li className='country- card card' >
    <div className="container-card bg-white-box">
        <img src={flags.svg} alt="flags" />
        <div class="countryInfor">
          <p class="card-title">{name.common}</p>
          <p>
            <span class="card-description">Population:</span>{population.toLocaleString()}
          </p>
          <p>
            <span class="card-description">Region:</span>{region}
          </p>
          <p><span class="card-descriptio">Capital:{capital[0]}</span></p>
          <NavLink to={`/country/${name.common}`}>
            <button>Read More...</button>
          </NavLink>
        </div>
    </div>

    </li>
    
  )
}

export default CountryCards