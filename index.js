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

db.on('query', query =>{
    console.log(query)
})

app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/', async(req, res)=>{
    const categories = await db('categories').select('*')
    console.log(categories)
    res.render('home',{categories})
})
app.get('/categoria/:id',async(req,res)=>{
    const categories = await db('categories').select('*')
    const products = await db('products').select('*').where('id',function(){
        this
        .select('categories_products.product_id')
        .from('categories_products')
        .whereRaw('categories_products.product_id = products.id')
        .where('categorie_id',req.params.id)
    })
    res.render('category',{
        categories,
        products
    })
})
app.listen(port, err =>{
    if(err){
        console.log('nao foi possivel iniciar o servidor',err)
    }else{
        console.log('devshop server rodando...')
    }
})