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
  viewEdit: async (req, res) => {
    const { id } = req.params;
    try {
      const category = await Category.findOne({ _id: id });

      res.render("admin/category/edit", { category });
    } catch (error) {
      console.log(error);
    }
  },
  actionEdit: async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const category = await Category.findOneAndUpdate({ _id: id }, { name });

      res.redirect("/category");
    } catch (error) {
      console.log(error);
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findOneAndDelete({ _id: id });

      res.redirect("/category");
    } catch (error) {
      console.log(error);
    }
  },
};
