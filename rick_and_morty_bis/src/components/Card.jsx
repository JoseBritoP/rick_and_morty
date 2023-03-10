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

export default class Card extends React.Component {
  //  constructor(props){
  //     super(props)
  //  }

  render() {
    return (
      <div>
         <button onClick={this.props.onClose}>X</button>
         <h2>{this.props.name}</h2>
         <img  src={this.props.image} alt={`Carta de ${this.props.name}`} />
         <h2>{this.props.species}</h2>
         <h2>{this.props.gender}</h2>
      </div>
    )
  }
}
