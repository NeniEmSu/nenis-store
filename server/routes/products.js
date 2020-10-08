const express = require("express");
const router = express.Router();

const productsCtrl = require("../controllers/productsController");
const validateId = require("../middleware/validateId");

router.get("/", productsCtrl.getProducts);

router.get("/:id", validateId, productsCtrl.getSingeProduct);

router.post("/", productsCtrl.addProduct);

router.put("/:id", validateId, productsCtrl.updateProduct);

module.exports = router;
