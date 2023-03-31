// export default function Card(props) {
//    return (
//       <div>
//          <button onClick={props.onClose}>X</button>
//          <h2>{props.name}</h2>
//          <h2>{props.species}</h2>
//          <h2>{props.gender}</h2>
//          <img  src={props.image} alt={`Carta de ${props.name}`} />
//       </div>
//    );
// }

import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'
import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { removeFavorite } from '../../redux/actions';


const Card = ({onClose, name, image, species, gender,id,removeFavorite,myFavorites}) =>{

  const [isFav,setIsFav] = useState(false)

  const addFavorite = (character) => {
    axios.post('http://localhost:3001/rickandmorty/fav',character)
    .then((res)=> console.log('ok'))
  }
  const handleFavorite = () => {
    if(isFav){
      setIsFav(false);
      removeFavorite(id)
    }else{
      setIsFav(true);
      addFavorite({ id, name, image, species, gender})
    }
  }
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites,id]);
              
  return (
    <div className={styles.card}>
    <button className={styles.card__button} onClick={()=>onClose(id)}>X</button>
    { isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )
    }
    
    <Link to={`/detail/${id}`} >
      <h2 className={styles.card__title}>{name}</h2>
    </Link>
    <img src={image} alt={`Carta de ${name}`} className={styles.card__image} />
    <div className={styles.card__container}>
      <h2 className={styles.card__subtitle}>Especie: {species}</h2>
      <h2 className={styles.card__subtitle}>Género: {gender}</h2>
    </div>
  </div>
  )
}

  const mapDispatchToProps = (dispatch) => {
    return {
      removeFavorite: (id) => {
        dispatch(removeFavorite(id));
      },
    };
  };
  
  const mapStateToProps = (state) => {
    return {
      myFavorites: state.myFavorites,
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Card);