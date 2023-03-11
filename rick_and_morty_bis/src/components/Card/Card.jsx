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
  //     super(props)
  //  }

  render() {
    return (
      <div className={styles.card}>
      <button onClick={this.props.onClose}>X</button>
      <h2 className={styles.card__title}>{this.props.name}</h2>
      <img src={this.props.image} alt={`Carta de ${this.props.name}`} className={styles.card__image} />
      <h2 className={styles.card__subtitle}>Especie: {this.props.species}</h2>
      <h2 className={styles.card__subtitle}>Género: {this.props.gender}</h2>
    </div>
    )
  }
}
