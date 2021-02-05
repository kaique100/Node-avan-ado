const fetch = require('node-fetch')
// function buscaCep(cep) {

//   module.exports = async function buscaCorreio(valor) {  
//  const response = await fetch(`https://economia.awesomeapi.com.br/json/all/${valor}`)
    
//     const json = await response.json()
    
//     return json
//   }
module.exports = async function buscaMoeda(valor) {  
   if (valor=="dolar") {
     const response = await fetch(`https://economia.awesomeapi.com.br/json/all/USD-BRL`)
     const json = await response.json()
     return json.USD
    }
    else if(valor=="libra") {
      const response = await fetch(`https://economia.awesomeapi.com.br/json/all/GBP-BRL`)
      const json = await response.json()
      return json.GBP
    } 
    else{
      const response = await fetch(`https://economia.awesomeapi.com.br/json/all/EUR-BRL`)
      const json = await response.json()
      return json.EUR
    }
    }