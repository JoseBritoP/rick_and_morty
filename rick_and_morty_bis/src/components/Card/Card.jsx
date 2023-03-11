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
import styles from './Card.module.css'
export default class Card extends React.Component {
  //  constructor(props){
      // super(props)
  //  } 

  render() {
    const {onClose, name, image, species, gender,id} = this.props;

    return (
      <div className={styles.card}>
      <button className={styles.card__button} onClick={()=>onClose(id)}>X</button>
      <h2 className={styles.card__title}>{name}</h2>
      <img src={image} alt={`Carta de ${name}`} className={styles.card__image} />
      <div className={styles.card__container}>
        <h2 className={styles.card__subtitle}>Especie: {species}</h2>
        <h2 className={styles.card__subtitle}>Género: {gender}</h2>
      </div>
    </div>
    )
  }
 
 
    //   return (
  //     <div className={styles.card}>
  //     <button className={styles.card__button} onClick={.onClose}>X</button>
  //     <h2 className={styles.card__title}>{.name}</h2>
  //     <img src={.image} alt={`Carta de ${.name}`} className={styles.card__image} />
  //     <div className={styles.card__container}>
  //       <h2 className={styles.card__subtitle}>Especie: {.species}</h2>
  //       <h2 className={styles.card__subtitle}>Género: {.gender}</h2>
  //     </div>
  //   </div>
  //   )
  // }
}
