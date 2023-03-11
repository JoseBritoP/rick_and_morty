import Card from '../Card/Card';

export default function Cards(props) {
   const { characters } = props;
   return (
   <div>
      {
         characters.map((char)=>{
            return(
               <Card 
               name={char.name}
               species= {char.species}
               gender= {char.gender}
               image= {char.image} alt={`Carta de ${char.name}`}
               onClose= {() => window.alert(`Emulamos que se cierra la card de ${char.name}`)}
               />
            )
         })
      }
   </div>
   );
}
