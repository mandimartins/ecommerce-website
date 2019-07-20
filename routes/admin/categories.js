const init = db =>{

    const express = require('express')
    const router =  express.Router()
    
    const categories = require('../../controllers/categories')

    router.get('/',categories.adminGetCategories(db))

    router.get('/nova',categories.adminCreateCategory(db))
    router.post('/nova',categories.adminCreateCategory(db))

    return router
}


module.exports = init
