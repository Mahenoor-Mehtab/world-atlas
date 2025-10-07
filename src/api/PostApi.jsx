import axios from "axios"

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1"
})

// HTTP GET METHOD
export const getCountry= ()=>{
  return api.get("/independent/?status=true&fields=languages,capital,name,population,region,flags");
}


// HTTP GET METHOD Indivdual data
export const getIndiCountry = (name) => {
  return api.get(
    `/name/${encodeURIComponent(name)}?fullText=true&fields=name,capital,region,languages,population,flags`
  );
};

// yaha kya ho raha h ki api ke andar axious.craete ek js object de deta h jisem get , post , put  delet ye sb methdo bhi present hota h jaise hi api.get call hota h waise hi baseurl bhi js object ne configure rahta h aur baseurl attach ho jata h joi get se endpoint aaye rahte h default ye sb hota h 