const Category = require("./model");

module.exports = {
  index: async (req, res) => {
    const categories = await Category.find();
    return res.render("admin/category/view_category", { categories });
  },
  viewCreate: async (req, res) => {
    return res.render("admin/category/create");
  },
  actionCreate: async (req, res) => {
    try {
      const { name } = req.body;

      let category = await Category({ name });
      await category.save();

      res.redirect("/category");
    } catch (err) {
      console.log(err);
    }
  },
};
