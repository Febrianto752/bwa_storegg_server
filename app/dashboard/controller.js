module.exports = {
    index: async (req, res) => {
        return res.render("index", { title: "express app" })
    }
}