const Voucher = require("./model");

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
};
