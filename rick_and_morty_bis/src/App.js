import { useState } from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cards from './components/Cards/Cards.jsx'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Error from './components/Error/Error'
import Form from './components/Form/Form'
import './App.css'
// import Card from './components/Card/Card.jsx'

function App () {

  // State/Personaje a mostrar
  const [characters,setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    !access && navigate("/");
  }, [access]);

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

  const {pathname} = useLocation();

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  const username = "josbrito@mail.com";
  const password = "pass21";

  return (
    <div className='App' style={{ padding: '25px' }}>
        {/* Es para que el nav se muestre en los demás path exceptuando el del Form */}
        {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path='/home' element={ <Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
        <Route path="/" element={<Form login={login} />} />
        <Route path='/*' element ={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
