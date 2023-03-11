import './App.css'
import { useState } from 'react'
// import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'

function App () {

  // State/Personaje a mostrar
  const [characters,setCharacters] = useState([]);


  //Funciones 
  const onSearch = (id) =>{
    const URL_BASE = 'https://be-a-rym.up.railway.app/api'
    const KEY = '25646530d133.e16d02b2bb0d7f53a40c'

    if(characters.find((char)=>char.id === id)) return alert('Personaje repetido');
    
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          //  setCharacters((oldChars) => [...oldChars, data]);
          setCharacters([...characters,data])
        } else {
           window.alert('No hay personajes con ese ID');
        }
    });
  }

  const onClose = (id) =>{
    setCharacters(characters.filter((char)=> char.id !==id))
  }
  return (
    <div className='App' style={{ padding: '25px' }}>
        <Nav onSearch={onSearch}/>
        <Cards characters={characters} onClose={onClose}/>
    </div>
  )
}

export default App
