const express = require('express')

const app = express()
const port = process.env.port || 3000

const db = require('knex')({
    client:'mysql2',
    connection:{
        host:'localhost',
        user:'root',
        password:'password',
        database:'devshop'
    }
})

app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/', async(req, res)=>{
    const categories = await db('categories').select('*')
    console.log(categories)
    res.render('home',{categories})
})

app.listen(port, err =>{
    if(err){
        console.log('nao foi possivel iniciar o servidor',err)
    }else{
        console.log('devshop server rodando...')
    }
})