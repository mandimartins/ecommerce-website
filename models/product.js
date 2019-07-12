const getProductsByCategoryId = db => async(id) =>{

    const products = await db('products').select('*').where('id',function(){
        this
        .select('categories_products.product_id')
        .from('categories_products')
        .whereRaw('categories_products.product_id = products.id')
        .where('categorie_id',id)
    })

    return products
}

const getProductById = db => async(id) => {
    const product = await db('products').select('*').where('id',id)
    return product[0]
}

module.exports = {
    getProductsByCategoryId,
    getProductById
}