import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Error from './components/Error/Error'
import './App.css'
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
    const urlCharacterId = `${URL_BASE}/character/${id}?key=${KEY}`;

    const url =  urlCharacterId
    if(characters.find((char)=>char.id === id)) return alert('Personaje repetido');
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          //  setCharacters((oldChars) => [...oldChars, data]);
          setCharacters([...characters,data])
        } else {
           window.alert('No hay personajes a mostrar');
        }
    });
  }

  // OnSearch Hace una petición del personaje en base al id y luego lo setea, agregando lo que ya tenía characters con la nueva data

  const onClose = (id) =>{
    setCharacters(characters.filter((char)=> char.id !==id))
  }
  return (
    <div className='App' style={{ padding: '25px' }}>
        <Nav onSearch={onSearch}/>
      <Routes>
        <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
        <Route path='/*' element ={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App


/*

"/home": esta será la ruta del Home (vista principal/general).
"/detail/:detailId": en esta ruta encontraremos información más detallada sobre el personaje en particular.
"/about": en esta ruta colocarás tu nombre y describirás de qué trata la aplicación Rick & Morty.
*/