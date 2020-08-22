const init = (db) => {
  const category = require('../models/category')(db);
  const product = require('../models/product')(db);

  const getCategories = async (req, res) => {
    const products = await product.getProductsByCategoryId(
      req.params.id,
      req.query
    );
    const cat = await category.getCategoryById(req.params.id);
    res.render('category', {
      products,
      category: cat,
    });
  };

  const adminGetCategories = async (req, res) => {
    const categories = await category.getCategories();
    res.status(200).render('admin/categories/index', {
      categories,
    });
  };

  const adminCreateCategory = async (req, res) => {
    if (req.method === 'GET') {
      res.status(200).render('admin/categories/create', {
        form: {},
        errors: [],
      });
    } else if (req.method === 'POST') {
      try {
        await category.createCategory(req.body);
        res.redirect('/admin/categorias');
      } catch (err) {
        res.status(400).render('admin/categories/create', {
          form: req.body,
          errors: err.errors.fields,
        });
      }
    }
  };

  const adminRemoveCategory = async (req, res) => {
    try {
      await category.removeCategory(req.params.id);
      res.redirect('/admin/categorias');
    } catch (error) {
      res.status(500).json({ msg: 'Server Error' });
    }
  };

  const adminUpdateCategory = async (req, res) => {
    if (req.method === 'GET') {
      const cat = await category.getCategoryById(req.params.id);
      if (!cat[0]) {
        return res.status(500).json({
          msg: 'Server error',
        });
      } else {
        res.render('admin/categories/update', {
          form: cat[0],
          errors: [],
        });
      }
    } else if (req.method === 'POST') {
      try {
        await category.updateCategory(req.params.id, req.body);
        res.redirect('/admin/categorias');
      } catch (err) {
        res.status(400).render('admin/categories/update', {
          form: req.body,
          errors: err.errors.fields,
        });
      }
    }
  };

  return {
    getCategories,
    adminGetCategories,
    adminCreateCategory,
    adminRemoveCategory,
    adminUpdateCategory,
  };
};
module.exports = init;
