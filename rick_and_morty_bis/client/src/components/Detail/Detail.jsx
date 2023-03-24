import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Detail = () => {
  const {detailId} = useParams();
  const navigate = useNavigate();

  // Estado

  const [character,setCharacter] = useState({});

  // Quiero que cuando este componente se monte, mostrar los datos del personaje de id x
  useEffect(()=>{
    // const URL_BASE = 'https://be-a-rym.up.railway.app/api'
    const URL_BASE = 'http://localhost:3001/rickandmorty'
    // const KEY = '25646530d133.e16d02b2bb0d7f53a40c'
    axios(`${URL_BASE}/detail/${detailId}`)
    .then((response)=> setCharacter(response.data));
    // Axios ya convierte la respuesta a .json
    // Nos ahorra .then((response) => response.json())
    // response.data porque .data ya es una propiedad del axios

  },[detailId]);


  const BackToHome = () =>{
    navigate('/home')
  }

  return (
    <>
      {/*Renderizado condicional*/}
      {character.name ? (
        <>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
          <p>{character.status}</p>
          <div>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            {/* Cuando lleguemos al objeto character y a su propiedad origen, busquemos el nombre */}
            <p>{character.origen?.name}</p>
            <p>Primera aparición: <span> capitulo {character.episode[0]}</span></p>
          </div>
        </>
        ) : (<h3>Loading...</h3>)}
      <button onClick={BackToHome}>Volver a Home</button>
    </>
  )
}

export default Detail