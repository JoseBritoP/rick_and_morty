const axios = require("axios")
const URL_BASE = 'https://be-a-rym.up.railway.app/api'
const KEY = '25646530d133.e16d02b2bb0d7f53a40c'

const success = (response)=>{
  const {id,name,gender,status,species,image } = response.data;
  res.writeHead(200,{ "Content-Type": "application/json"});
  res.end(JSON.stringify({id,name,gender,status,species,image }))
}

const getCharById = (res,id) => {

  axios.get(`${URL_BASE}/character/${id}?key=${KEY}`)
  .then(response => success(response,res))
  .catch((error)=>{
    res.writeHead(500,{"Content-Type":"text/plain"})
    res.end(error.message)
  })

}

    // const urlCharacterId = `${URL_BASE}/character/${id}?key=${KEY}`;

module.exports = getCharById