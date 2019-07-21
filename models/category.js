const init = db =>{

    const slug = require('../utils/slug')
    const joi = require('@hapi/joi')
    const validation = require('../utils/validation')

    const createSchema = joi.object().keys({
        category: joi.string().min(5).max(245).required(),
        description: joi.string().min(5).required()
    })

    const getCategories = async () =>{
        const categories = await db('categories').select('*')
        const categoriesWithSlug = categories.map(category =>{
            const newCategory = {...category,slug:slug(category.category)}
            return newCategory
        })
        return categoriesWithSlug
    }

    const getCategoryById = async (id) =>{
        const category = await db('categories').select('*').where('id',id)
        return category 
    }

    const createCategory = async (category)=>{
        const value = validation.validate(category,createSchema)
        await db('categories').insert(value) 
        return true
    }

    const updateCategory = async (id, category)=>{
        const value = validation.validate(category,createSchema)
        await db('categories').where({id}).update(value)
        return true
    }

    const removeCategory = async (id)=>{
        await db('categories').where({id}).del()
    }
    return {
        getCategories,
        getCategoryById,
        createCategory,
        removeCategory,
        updateCategory
    }
}
module.exports = init