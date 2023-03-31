const axios = require("axios")
const {URL_BASE,KEY} = process.env;

// const successH = (response,res)=>{
//   const {id,name,gender,status,species,image } = response.data;
//   res.writeHead(200,{ "Content-Type": "application/json"});
//   res.end(JSON.stringify({id,name,gender,status,species,image }))
// }

// const errorH = (error,res)=>{
//   res.writeHead(500,{"Content-Type":"text/plain"})
//   res.end(error.message)
// }

const getCharById = (req,res) => {
  const {id} = req.params
  axios.get(`${URL_BASE}/character/${id}?key=${KEY}`)
  .then(response => {
    const {id,name,gender,status,species,origin,image } = response.data;
    res.status(200).json({id,name,gender,status,species,origin,image });
  })
  .catch((error)=>{
    res.status(500).json({error: error.message});
  })
}

module.exports = getCharById;