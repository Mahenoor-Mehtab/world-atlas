import React, { useEffect, useState, useTransition } from "react";
import { getIndiCountry } from "../../api/PostApi";
import { useParams } from 'react-router-dom'
import { Loader } from "../layout/Loader";
import { NavLink } from "react-router-dom";

const CardDetail = () => {
        const {id} = useParams()
        console.log(id)
     const [country, setCountry] = useState();
    const [isPending, startTransition] = useTransition();

  
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const res = await getIndiCountry(id); 
        console.log(res.data);

       
        startTransition(() => {
           if(res.status === 200){
             
             setCountry(res.data[0]);
 }
        });
      } catch (err) {
        console.error("Error fetching countries:", err);
      }
    };

    fetchData(); 
  }, []);

  if (isPending) return <Loader/>;

  return (
    <>
 <section className="card country-details-card container text-white">
  <div className="container-card bg-white-box">
    {country ? (
      <div className="country-image grid grid-two-cols">
        {/* Flag */}
        <img
          src={country.flags?.svg}
          alt={country.flags?.alt || "flag"}
          className="flag"
        />

        {/* Country Info */}
        <div className="country-content">
          <p className="card-title">{country.name.official}</p>
          <div className="infoContainer">
            <p>
              <span className="card-description">Native Name:</span>{" "}
              {Object.keys(country.name.nativeName)
                .map((key) => country.name.nativeName[key].common)
                .join(", ")}
            </p>
            <p>
              <span className="card-description">Population:</span>{" "}
              {country.population.toLocaleString()}
            </p>
            <p>
              <span className="card-description">Region:</span>{" "}
              {country.region}
            </p>
            <p>
              <span className="card-description">Subregion:</span>{" "}
              {country.subregion}
            </p>
            <p>
              <span className="card-description">Capital:</span>{" "}
              {country.capital?.join(", ")}
            </p>
            <p>
              <span className="card-description">Top-Level Domain:</span>{" "}
              {country.tld?.join(", ")}
            </p>
            <p>
              <span className="card-description">Currencies:</span>{" "}
              {country.currencies &&
                Object.values(country.currencies)
                  .map((cur) => cur.name)
                  .join(", ")}
            </p>
            <p>
              <span className="card-description">Languages:</span>{" "}
              {country.languages &&
                Object.values(country.languages).join(", ")}
            </p>
            <p>
              <span className="card-description">Borders:</span>{" "}
              {country.borders ? country.borders.join(", ") : "None"}
            </p>
            <p>
              <span className="card-description">Timezones:</span>{" "}
              {country.timezones?.join(", ")}
            </p>
          </div>
        </div>
      </div>
    ) : (
      <Loader />
    )}
  </div>

  {/* Back Button */}
  <div className="country-card-backBtn">
    <NavLink to="/country">
      <button>Go Back</button>
    </NavLink>
  </div>
</section>

    </>
  )
}

export default CardDetail