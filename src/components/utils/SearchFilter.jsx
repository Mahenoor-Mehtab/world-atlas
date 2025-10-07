import React, { useEffect } from 'react'

const SearchFilter = ({search , setSearch , filter , setFilter}) => {
 const handleInputChange = (e)=>{
    e.preventDefault()
    setSearch(e.target.value)
   }

const onHandleChange =(e)=>{
     e.preventDefault()
setFilter(e.target.value)
   }

  return (
    <>
<section className='section-searchFilter container'>
    <input type="text" placeholder='search' value={search} onChange={handleInputChange}/>

    <div>
        <select className='select-section' value={filter}
        onChange={onHandleChange}
        >
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
    </div>
</section>
    </>
  )
}

export default SearchFilter