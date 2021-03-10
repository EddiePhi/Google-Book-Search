// Referencing code from JoelDore: https://github.com/JoelDore/goog-reads/
// Referencing code from WK21-Act 05

const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require('./googlebooks')

// Book collection routes
router.use("/books", bookRoutes);

// GoogleBooks API routes
router.use('/googlebooks', googleRoutes)

module.exports = router;
