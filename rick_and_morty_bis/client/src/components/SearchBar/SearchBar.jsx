import React from "react";
import { useState } from "react";
import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   // (props)
   // State / Estado de Id que usaremos como parametro
   const [id,setId] = useState("");

   const handleChange = (event) =>{
      setId(event.target.value)
   };

   // Con destructuring

   return (
      <div className={style.searchBar}>
         <button className={style.searchButton} onClick={()=>onSearch(`Buscando cualquier personaje..`)}>Random</button>
         <input type='search' className={style.searchInput} onChange={handleChange}/>
         <button className={style.searchButton} onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}


   // Sin destructuring
//    return (
//       <div className={style.searchBar}>
//          <button className={style.searchButton} onClick={()=>props.onSearch(`Buscando cualquier personaje..`)}>Random</button>
//          <input type='search' className={style.searchInput} onChange={handleChange}/>
//          <button className={style.searchButton} onClick={()=>props.onSearch(id)}>Agregar</button>
//       </div>
//    );
// }
