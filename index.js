const db = require('knex')({
    client:'mysql2',
    connection:{
        host:'localhost',
        user:'root',
        password:'amds121097',
        database:'devshop'
    }
})

db.on('query', query =>{
    console.log('SQL: ',query.sql)
})

const app = require('./app')(db)

const port = process.env.PORT || 3000

const user = require('./models/user')
user.initialUser(db)()

app.listen(port, err =>{
    if(err){
        console.log('nao foi possivel iniciar o servidor',err)
    }else{
        console.log('devshop server rodando...')
    }
})