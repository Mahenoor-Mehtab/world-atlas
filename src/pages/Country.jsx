import React, { useEffect, useState, useTransition } from "react";
import { getCountry } from "../api/PostApi";
import CountryCards from "../components/utils/CountryCards";
import { Loader } from "../components/layout/Loader";
import SearchFilter from "../components/utils/SearchFilter";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [isPending, startTransition] = useTransition("ALL");

  const[search , setSearch]  = useState("");
  const[filter , setFilter] = useState("all");

    useEffect(() => {
    // Async kaam pehle karo
    const fetchData = async () => {
      try {
        const countrydata = await getCountry(); // Wait for API to resolve
        console.log(countrydata.data);

        // Sirf state update ko low-priority banao
        startTransition(() => {
          setCountries(countrydata.data);
        });
      } catch (err) {
        console.error("Error fetching countries:", err);
      }
    };

    fetchData(); // Call async function
  }, []);

  if (isPending) return <Loader/>;

  //! search && filter
const searchCountry = (country)=>{
  console.log(country)
  if(search) return country.name.common.toLowerCase().includes(search.toLowerCase())
    return true
}

const filterRegion= (country)=>{
  console.log(filter)
  if(filter === "all")  return country
    return country.region === filter
}

  const filterCountries = countries.filter( (country)=> searchCountry(country) && filterRegion(country) )





  return (
    <>
    <section className="country-section">
    <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} ></SearchFilter>
     <ul className="grid grid-four-cols">
          {filterCountries.map((curCountry , index) => {
           return <CountryCards country={curCountry} key={index} />
          })}
        </ul>

    </section>
    </>
  );
};

export default Country;
