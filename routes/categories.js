const init = db =>{

    const express = require('express')
    const router =  express.Router()
    
    const categories = require('../controllers/categories')

    router.get('/:id/:slug',categories.getCategories(db))

    return router
}


module.exports = init
