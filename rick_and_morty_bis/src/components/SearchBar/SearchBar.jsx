import React from "react";
import style from './SearchBar.module.css'

export default function SearchBar(props) {
   return (
      <div className={style.searchBar}>
         <input type='search' className={style.searchInput}/>
         <button className={style.searchButton} onClick={()=>props.onSearch(`Buscando..`)}>Agregar</button>
      </div>
   );
}
