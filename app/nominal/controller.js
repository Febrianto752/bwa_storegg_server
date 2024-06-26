const Nominal = require("./model");

module.exports = {
  index: async (req, res) => {
    try {
      const nominals = await Nominal.find();
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };
      const username = req.session.user.name;
      return res.render("admin/nominal/view_nominal", {
        nominals,
        alert,
        username,
        title: "nominal list",
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/nominal");
    }
  },
  viewCreate: async (req, res) => {
    const username = req.session.user.name;
    return res.render("admin/nominal/create", {
      username,
      title: "create nominal",
    });
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
  viewEdit: async (req, res) => {
    const { id } = req.params;
    try {
      const nominal = await Nominal.findOne({ _id: id });
      const username = req.session.user.name;
      res.render("admin/nominal/edit", {
        nominal,
        username,
        title: "edit nominal",
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/nominal");
    }
  },
  actionEdit: async (req, res) => {
    try {
      const { id } = req.params;
      const { coinName, coinQuantity, price } = req.body;

      const nominal = await Nominal.findOneAndUpdate(
        { _id: id },
        { coinName, coinQuantity, price }
      );
      req.flash("alertMessage", "Berhasil mengubah nominal");
      req.flash("alertStatus", "success");

      res.redirect("/nominal");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/nominal");
    }
  },
  actionDelete: async (req, res) => {
    try {
      const { id } = req.params;
      const nominal = await Nominal.findOneAndDelete({ _id: id });
      req.flash("alertMessage", "Berhasil menghapus nominal");
      req.flash("alertStatus", "success");
      res.redirect("/nominal");
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/nominal");
    }
  },
};
