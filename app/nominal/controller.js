const Nominal = require("./model");

module.exports = {
  index: async (req, res) => {
    try {
      const nominals = await Nominal.find();
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };
      return res.render("admin/nominal/view_nominal", { nominals, alert });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/nominal");
    }
  },
  viewCreate: async (req, res) => {
    return res.render("admin/nominal/create");
  },
  actionCreate: async (req, res) => {
    try {
      const { price, coinName, coinQuantity } = req.body;

      let nominal = await Nominal({ price, coinName, coinQuantity });
      await nominal.save();

      req.flash("alertMessage", "Berhasil menambah nominal");
      req.flash("alertStatus", "success");

      res.redirect("/nominal");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/nominal");
    }
  },
};
