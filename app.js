const init = db =>{
    const category = require('./models/category')(db)
    const routes = require('./routes/index')
    const bodyParser = require('body-parser')
    const session = require('express-session')

    const express = require('express')
    const app = express()

    app.use(bodyParser.json({extended:true}))
    app.use(bodyParser.urlencoded())

    app.use(session({
        secret:'MyDevShopRulez!',
        name: 'sessionId'
    }))

    app.set('view engine','ejs')
    app.use(express.static('public'))

    //middleware
    app.use(async(req, res, next)=>{
        const categories = await category.getCategories()
        const {user} = req.session
        res.locals = {
            categories,
            user
        }
        next()
    })
    app.use(routes(db))

    return app
}

module.exports = init

