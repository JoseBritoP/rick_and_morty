import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card';
const Favorites = () => {
  const favorites = useSelector((state) => state.myFavorites);

  return (
    <div>
      { favorites?.map(({id,name,species,gender,image,})=>{
        return  (
          <Card 
            key={id}
            id={id}
            name={name}
            species= {species}
            gender= {gender}
            image= {image} alt={`Carta de ${name}`}
          />
        )
      })}
    </div>
  )
}

export default Favorites