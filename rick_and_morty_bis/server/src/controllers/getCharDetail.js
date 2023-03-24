const axios = require("axios")
const URL_BASE = 'https://be-a-rym.up.railway.app/api'
const KEY = '25646530d133.e16d02b2bb0d7f53a40c'

const successH = (response,res)=>{
  const {name,gender,status,species,origin,image} = response.data;
  res.writeHead(200,{ "Content-Type": "application/json"});
  res.end(JSON.stringify({name,gender,status,species,origin,image }))
}

const errorH = (error,res)=>{
  res.writeHead(500,{"Content-Type":"text/plain"})
  res.end(error.message)
}
const getCharDetail = (res,id) => {

  axios.get(`${URL_BASE}/character/${id}?key=${KEY}`)
  .then(response => successH(response,res))
  .catch(error => errorH(error,res))

}

module.exports = getCharDetail