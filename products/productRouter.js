const router = require("express").Router();

const Product = require("./productModel");

const currentTime = new Date().toDateString();

// @desc		Test end is working
// @route		GET /test
router.get("/test", (req, res) => {
  res.status(202).json({ message: "the server is running at " + currentTime });
});

router.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});

router.get("/products", (req, res) => {
  Product.find()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((error) =>
      res.status(500).json({ message: `${error.message}; ${error.stack}` })
    );
});

module.exports = router;
