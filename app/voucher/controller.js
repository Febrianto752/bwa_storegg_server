const Voucher = require("./model");
const Category = require("../category/model");
const Nominal = require("../nominal/model");
const path = require("path");
const fs = require("fs");
const config = require("../../config");

module.exports = {
  index: async (req, res) => {
    try {
      const vouchers = await Voucher.find();
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };
      return res.render("admin/voucher/view_voucher", { vouchers, alert });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/voucher");
    }
  },
  viewCreate: async (req, res) => {
    const categories = await Category.find();
    const nominals = await Nominal.find();
    return res.render("admin/voucher/create", { categories, nominals });
  },
  actionCreate: async (req, res) => {
    try {
      const { name, category, nominals } = req.body;

      if (req.file) {
        let tmp_path = req.file.path;
      }
      // let category = await Category({ name });
      await category.save();

      req.flash("alertMessage", "Berhasil menambah kategori");
      req.flash("alertStatus", "success");

      res.redirect("/category");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/category");
    }
  },
};
