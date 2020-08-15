const init = (db) => {
  const product = require('../models/product')(db);
  const getProduct = async (req, res) => {
    const prod = await product.getProductById(req.params.id);
    res.render('product-detail', {
      product: prod,
    });
  };
  return {
    getProduct,
  };
};
module.exports = init;
