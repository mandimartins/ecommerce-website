
const init = (db) =>{
    const home = require('../controllers/home')
    const auth = require('../controllers/auth')

    const categories = require('./categories')
    const products = require('./products')

    const router = require('express').Router()

    router.get('/', home.getIndex)
    router.post('/login',auth.login(db))
    router.get('/logout',auth.logout)
    router.use('/categoria',categories(db))
    router.use('/produto',products(db))

    return router
}
module.exports = init

