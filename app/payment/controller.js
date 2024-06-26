const Payment = require("./model");
const Bank = require("../bank/model");

module.exports = {
  index: async (req, res) => {
    try {
      const payments = await Payment.find().populate("banks");

      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };

      return res.render("admin/payment/view_payment", {
        payments,
        alert,
        username: req.session.user.name,
        title: "payment list",
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/payment");
    }
  },
  viewCreate: async (req, res) => {
    try {
      const banks = await Bank.find();

      return res.render("admin/payment/create", {
        banks,
        username: req.session.user.name,
        title: "payment list",
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/payment");
    }
  },
  actionCreate: async (req, res) => {
    try {
      const { type, banks } = req.body;

      let payment = await Payment({ type, banks });
      await payment.save();

      req.flash("alertMessage", "Berhasil menambah payment");
      req.flash("alertStatus", "success");

      res.redirect("/payment");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/payment");
    }
  },
  viewEdit: async (req, res) => {
    const { id } = req.params;
    try {
      const payment = await Payment.findOne({ _id: id });
      const banks = await Bank.find();

      res.render("admin/payment/edit", {
        payment,
        banks,
        username: req.session.user.name,
        title: "payment list",
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/payment");
    }
  },
  actionEdit: async (req, res) => {
    try {
      const { id } = req.params;
      const { type, banks } = req.body;

      const payment = await Payment.findOneAndUpdate(
        { _id: id },
        { type, banks }
      );
      req.flash("alertMessage", "Berhasil mengubah payment");
      req.flash("alertStatus", "success");

      res.redirect("/payment");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/payment");
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      const payment = await Payment.findOneAndDelete({ _id: id });
      req.flash("alertMessage", "Berhasil menghapus jenis pembayaran");
      req.flash("alertStatus", "success");
      res.redirect("/payment");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/payment");
    }
  },
};
