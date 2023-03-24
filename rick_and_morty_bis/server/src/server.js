const http = require("http")
const data = require('./utils/data')
const fs = require("fs")

http.createServer(
  (req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    const {url} = req;
    // console.log(url);

    
    if(url.includes("rickandmorty/character/")){
      
      // Para obtener el id 
      const id = url.split("/").at(-1)
      // Para buscar por id los personajes
      const character = data.find((char)=> char.id == id)
      //Es para ver la respuesta del servidor/similar a un console.log

      // console.log(character)
      // res.end(`Estoy en la ruta con el id: ${id}`)

      if(character){
        res.writeHead(200, { "Content-Type" : "application/json" })
        return res.end(JSON.stringify(character));
      } else{
        res.writeHead(404,{"Content-Type": "application/json"})
        return res.end(JSON.stringify({error:"Character not found"}))
      }
    }
    
  }
  ).listen(3001,"localhost")