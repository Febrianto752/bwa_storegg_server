const Transaction = require("./model");
module.exports = {
  index: async (req, res) => {
    try {
      const transactions = await Transaction.find().populate("category");
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };

      return res.render("admin/transaction/view_transaction", {
        transactions,
        alert,
        username: req.session.user.name,
        title: "transaction list",
      });
    } catch (error) {
      req.flash("alertMessage", `${error.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/transaction");
    }
  },
};
