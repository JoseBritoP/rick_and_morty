import React from "react";
import { useState } from "react";
import style from './SearchBar.module.css'

export default function SearchBar(props) {
   const [id,setId] = useState("");

   const handleChange = (event) =>{
      setId(event.target.value)
   };
   return (
      <div className={style.searchBar}>
         <button className={style.searchButton} onClick={()=>props.onSearch(`Buscando cualquier personaje..`)}>Random</button>
         <input type='search' className={style.searchInput} onChange={handleChange}/>
         <button className={style.searchButton} onClick={()=>props.onSearch(id)}>Agregar</button>
      </div>
   );
}
