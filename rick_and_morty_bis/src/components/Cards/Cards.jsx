import Card from '../Card/Card';

export default function Cards(props) {
   const { characters, onClose} = props;
   return (
   <div>
      {
         // characters.map((char)=>{
         characters.map(({id,name,species,gender,image,})=>{
            return(
               <Card 
               key={id}
               id={id}
               name={name}
               species= {species}
               gender= {gender}
               image= {image} alt={`Carta de ${name}`}
               onClose= {() => onClose(id)}
               />
            )
         })
      }
   </div>
   );
}
