const Bank = require("./model");

module.exports = {
  index: async (req, res) => {
    try {
      const banks = await Bank.find();
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };
      return res.render("admin/bank/view_bank", { banks, alert });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/bank");
    }
  },
  viewCreate: async (req, res) => {
    return res.render("admin/bank/create");
  },
  actionCreate: async (req, res) => {
    try {
      const { owner, bankName, noRekening } = req.body;

      let bank = await Bank({ owner, bankName, noRekening });
      await bank.save();

      req.flash("alertMessage", "Berhasil menambah kategori");
      req.flash("alertStatus", "success");

      res.redirect("/bank");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/bank");
    }
  },
};
