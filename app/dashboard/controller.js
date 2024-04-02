module.exports = {
  index: async (req, res) => {
    const username = req.session.user.name;

    return res.render("index", { username, title: "Dashboard" });
  },
};
