const express = require ('express')

const app = express()
const bodyParser=require('body-parser')
const buscaCep = require('./src/functions/buscaCep') 
const buscaMoeda = require('./src/functions/buscaMoeda')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.get('/',(req,res) => {
    res.render('index')
})

app.post('/envia-cep', async (req,res) => {
    const {cep} = req.body
    const resultado = await buscaCep(cep)
    console.log(resultado)
   

    res.render('resultado', {dado:resultado})

}) 

app.post('/envia-pacote', async (req,res) => {
    const {valor} = req.body
    const resultado = await buscaMoeda(valor)

    res.render('resultadoo', {dado:resultado})
    
})
app.listen(3300)