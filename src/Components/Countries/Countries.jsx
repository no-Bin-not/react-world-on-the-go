import React, { use, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  const [visitedCountry, setVisitedCountry]=useState([])
  const [visitedFlags, setVisitedFlags]=useState([])

  const handleVisitedCountry=(country)=>{
    const newvisitedCountry=[...visitedCountry,country]
    setVisitedCountry(newvisitedCountry)
  }
  const handleVisitedFlags=(flags)=>{
    const newVisitedFlags=[...visitedFlags,flags]
    setVisitedFlags(newVisitedFlags)
    
  }

  return (
    <div>
      <h1>In the Coutries: {countries.length}</h1>
      <h4>Total country visited: {visitedCountry.length}</h4>
      <ol>
        {
            visitedCountry.map(country=><li key={country.cca3.cca3}>{country.name.common}</li>)
        }
      </ol>
        <div className="flag-container">   
        {
            visitedFlags.map((flag,index)=><img  src={flag} key={index}></img>)
        }
      </div>

      <div className="countries">
        {countries.map((country) => (
          <Country 
          key={country.cca3.cca3} 
          country={country} 
          handleVisitedCountry={handleVisitedCountry}
          handleVisitedFlags={handleVisitedFlags}>

          </Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
