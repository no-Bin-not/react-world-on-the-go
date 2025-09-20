import React, { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountry, handleVisitedFlags}) => {
  const [visited, setVisited] = useState(false);
  const handleClick = () => {
    // if(visited){          //way 1
    //     setVisited(false)
    // }else{
    //     setVisited(true)
    // }
    // visited?setVisited(false):setVisited(true)  //way 2
    setVisited(!visited)
    handleVisitedCountry(country)
  };
  return (
    <div className={`country ${visited && 'country-visited'}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h2>
        <small>Name:</small> {country.name.common}
      </h2>
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleClick}>{visited?'Visited':'Not Visited'}</button>
      <button onClick={()=>{handleVisitedFlags(country.flags.flags.png)}}>Add Flags</button>
    </div>
  );
};

export default Country;
